import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class ImageUploadService {
  private uploadDir = 'uploads/images'; // Relative to project root or configure

  async uploadImage(file: Express.Multer.File): Promise<string> {
    // Ensure upload directory exists
    await fs.mkdir(this.uploadDir, { recursive: true });

    const fileName = `${Date.now()}-${file.originalname}`;
    const filePath = path.join(this.uploadDir, fileName);

    await fs.writeFile(filePath, file.buffer);

    // Return URL, assuming served from /uploads/images/
    return `/uploads/images/${fileName}`;
  }

  async uploadMultipleImages(files: Express.Multer.File[]): Promise<string[]> {
    const urls: string[] = [];
    for (const file of files) {
      const url = await this.uploadImage(file);
      urls.push(url);
    }
    return urls;
  }
}