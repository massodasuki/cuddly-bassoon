import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationEshNdDokumen } from './application-esh-nd-dokumen.entity';
import { CreateApplicationEshNdDokumenDto } from './dto/create-application-esh-nd-dokumen.dto';
import { UpdateApplicationEshNdDokumenDto } from './dto/update-application-esh-nd-dokumen.dto';

@Injectable()
export class ApplicationEshNdDokumenService {
  constructor(
    @InjectRepository(ApplicationEshNdDokumen)
    private applicationEshNdDokumenRepository: Repository<ApplicationEshNdDokumen>,
  ) {}

  findAll(): Promise<ApplicationEshNdDokumen[]> {
    return this.applicationEshNdDokumenRepository.find();
  }

  async findOne(id: string): Promise<ApplicationEshNdDokumen> {
    const applicationEshNdDokumen = await this.applicationEshNdDokumenRepository.findOneBy({ id });
    if (!applicationEshNdDokumen) {
      throw new Error('ApplicationEshNdDokumen not found');
    }
    return applicationEshNdDokumen;
  }

  async create(createApplicationEshNdDokumenDto: CreateApplicationEshNdDokumenDto): Promise<ApplicationEshNdDokumen> {
    const applicationEshNdDokumen = this.applicationEshNdDokumenRepository.create(createApplicationEshNdDokumenDto);
    return this.applicationEshNdDokumenRepository.save(applicationEshNdDokumen);
  }

  async update(id: string, updateApplicationEshNdDokumenDto: UpdateApplicationEshNdDokumenDto): Promise<ApplicationEshNdDokumen> {
    await this.applicationEshNdDokumenRepository.update(id, updateApplicationEshNdDokumenDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationEshNdDokumenRepository.delete(id);
  }
}