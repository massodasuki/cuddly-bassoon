
import { Injectable, BadRequestException } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

export interface UploadedFileInfo {
  originalName: string;
  filename: string;
  path: string;
  size: number;
  mimetype: string;
}

@Injectable()
export class ImageUploadService {
  private readonly uploadDir = path.join(process.cwd(), 'uploads');
  private readonly maxFileSize = 5 * 1024 * 1024; // 5MB
  private readonly allowedMimeTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp'
  ];

  constructor() {
    this.ensureUploadDirectoryExists();
  }

  private async ensureUploadDirectoryExists(): Promise<void> {
    try {
      await fs.access(this.uploadDir);
    } catch {
      await fs.mkdir(this.uploadDir, { recursive: true });
    }
  }

  async uploadImages(files: Express.Multer.File[], applicationId : string): Promise<Record<string, string>> {
    const uploadedFiles: Record<string, string> = {};

    for (const file of files) {
      this.validateFile(file);

      const fileInfo = await this.saveFile(file, applicationId);
      uploadedFiles[file.fieldname] = fileInfo.path;
    }

    return uploadedFiles;
  }

  private validateFile(file: Express.Multer.File): void {
    if (!file) {
      throw new BadRequestException('No file provided');
    }

    if (file.size > this.maxFileSize) {
      throw new BadRequestException(`File size exceeds maximum allowed size of ${this.maxFileSize / (1024 * 1024)}MB`);
    }

    if (!this.allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException(`File type ${file.mimetype} is not allowed. Allowed types: ${this.allowedMimeTypes.join(', ')}`);
    }
  }

  private async saveFile(file: Express.Multer.File, applicationId: string): Promise<UploadedFileInfo> {
    const fileExtension = path.extname(file.originalname);
    const originalFilename = file.originalname.replace(fileExtension, "");
    const timestamp = Date.now();
    const randomString = crypto.randomBytes(8).toString('hex');
    const filename = `${originalFilename}-${timestamp}-${randomString}${fileExtension}`;
    const filePath = path.join(this.uploadDir + "/"+ applicationId, filename);

    try {
      // Ensure the subdirectory exists
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(filePath, file.buffer);

      return {
        originalName: file.originalname,
        filename,
        path: filePath,
        size: file.size,
        mimetype: file.mimetype
      };
    } catch (error) {
      throw new BadRequestException(`Failed to save file: ${error.message}`);
    }
  }

  async deleteImage(imagePath: string): Promise<void> {
    if (!imagePath) return;

    try {
      // Ensure the path is within the uploads directory for security
      const resolvedPath = path.resolve(imagePath);
      const uploadDirResolved = path.resolve(this.uploadDir);

      if (!resolvedPath.startsWith(uploadDirResolved)) {
        throw new BadRequestException('Invalid file path');
      }

      await fs.unlink(resolvedPath);
    } catch (error) {
      // Log error but don't throw - file might already be deleted
      console.error(`Failed to delete image ${imagePath}:`, error);
    }
  }

  getImageUrl(imagePath: string): string {
    if (!imagePath) return '';

    // Return relative path from uploads directory
    const relativePath = path.relative(this.uploadDir, imagePath);
    return `/uploads/${relativePath.replace(/\\/g, '/')}`;
  }
}