import { Injectable, BadRequestException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { extname } from 'path';
import * as multer from 'multer';

@Injectable()
export class ImageService {
  private readonly allowedTypes = ['pegawaiSignature', 'nelayanSignature', 'veselCondition'];

  async handleUpload(file: Express.Multer.File, imageType: string) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    if (!this.allowedTypes.includes(imageType)) {
      throw new BadRequestException('Invalid image type');
    }

    const folderPath = this.getFolderPath(imageType);
    fs.mkdirSync(folderPath, { recursive: true });

    const filename = this.generateFileName(file.originalname);
    const fullPath = path.join(folderPath, filename);

    fs.writeFileSync(fullPath, file.buffer); // write from memory buffer

    return {
      message: 'Upload successful',
      imageType,
      filename,
      relativePath: path.relative(process.cwd(), fullPath),
      publicUrl: `/uploads/${this.getPublicUrlPath(imageType)}/${filename}`,
    };
  }

  private getFolderPath(imageType: string): string {
    switch (imageType) {
      case 'pegawaiSignature':
        return './uploads/signatures/pegawai';
      case 'nelayanSignature':
        return './uploads/signatures/nelayan';
      case 'veselCondition':
        return './uploads/vessel-condition';
      default:
        return './uploads/others';
    }
  }

  private getPublicUrlPath(imageType: string): string {
    switch (imageType) {
      case 'pegawaiSignature':
        return 'signatures/pegawai';
      case 'nelayanSignature':
        return 'signatures/nelayan';
      case 'veselCondition':
        return 'vessel-condition';
      default:
        return 'others';
    }
  }

  private generateFileName(originalName: string): string {
    const timestamp = Date.now();
    const ext = extname(originalName);
    return `img-${timestamp}${ext}`;
  }
}
