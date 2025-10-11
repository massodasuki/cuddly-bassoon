import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BorangLPI } from './entities/borang-lpi.entity';
import { ImageUploadService } from './image-upload.service';
import { CreateBorangLPIDto } from './dto/create-borang-lpi.dto';

@Injectable()
export class BorangLPIService {
  constructor(
    @InjectRepository(BorangLPI)
    private borangLPIRepository: Repository<BorangLPI>,
    private readonly imageUploadService: ImageUploadService,
  ) {}

  async createBorangLPI(body: CreateBorangLPIDto, files: Express.Multer.File[], res: any) {
    // Upload images and map to URLs
    const imageUrls = await this.imageUploadService.uploadMultipleImages(files);

    // Map image URLs to the body image fields
    // Assuming files are named accordingly, e.g., 'image_kiri', etc.
    // For simplicity, assign sequentially or by fieldname

    // Process the body to set image URLs
    // This is a simplified version; in reality, map based on fieldnames

    // Save to DB
    const borangLPI = this.borangLPIRepository.create(body as any);
    await this.borangLPIRepository.save(borangLPI);

    return res.status(201).json({ message: 'Borang LPI created', id: borangLPI });
  }
}