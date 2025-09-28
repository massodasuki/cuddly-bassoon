import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { mkdirSync, writeFileSync } from "fs";
import { join, extname } from "path";
import { Repository } from "typeorm";
import { LpiFormImage } from "./entities/lpi-form-image.entity";
import { LpiForm } from "./entities/lpi-form.entity";
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class LpiImageService {
  constructor(
    @InjectRepository(LpiFormImage)
    private readonly imageRepo: Repository<LpiFormImage>,
  ) {}

  async handleImageUploads(files: Express.Multer.File[], lpiForm: LpiForm) {
    const result : any = [];
    for (const file of files) {
      if (file.fieldname.startsWith('img_')) {
        const img = await this.handleSingleUpload(file, lpiForm);
        result.push(img);
      }
    }
    return this.imageRepo.save(result);
  }

  async handleSingleUpload(file: Express.Multer.File, lpiForm: LpiForm) {
    if (!file) throw new BadRequestException('No file uploaded');

    const filename = this.generateFileName(file.fieldname, file.originalname);
    const folderPath = `./uploads/${lpiForm.id}/`;
    const fullPath = join(folderPath, filename);
    mkdirSync(folderPath, { recursive: true });
    writeFileSync(fullPath, file.buffer);

    return this.imageRepo.create({
      id: uuidv4(),
      filename,
      path: `/uploads/${filename}`,
      lpiForm,
    });
  }

  private generateFileName(imgType: string, originalName: string) {
    const timestamp = Date.now();
    const ext = extname(originalName);
    return `${imgType}-${timestamp}${ext}`;
  }
}
