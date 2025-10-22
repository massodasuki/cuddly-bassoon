import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LandingMonthlyDocumentEntity } from './landing-monthly-documents.entity';

@Injectable()
export class LandingMonthlyDocumentService {
  constructor(
    @InjectRepository(LandingMonthlyDocumentEntity)
    private landingMonthlyDocumentsRepository: Repository<LandingMonthlyDocumentEntity>,
  ) {}

  findAll(): Promise<LandingMonthlyDocumentEntity[]> {
    return this.landingMonthlyDocumentsRepository.find();
  }

  async findOne(id: string): Promise<LandingMonthlyDocumentEntity> {
    const entity = await this.landingMonthlyDocumentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
