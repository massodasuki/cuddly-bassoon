import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LandingDocumentEntity } from './landing-documents.entity';

@Injectable()
export class LandingDocumentService {
  constructor(
    @InjectRepository(LandingDocumentEntity)
    private landingDocumentsRepository: Repository<LandingDocumentEntity>,
  ) {}

  findAll(): Promise<LandingDocumentEntity[]> {
    return this.landingDocumentsRepository.find();
  }

  async findOne(id: string): Promise<LandingDocumentEntity> {
    const entity = await this.landingDocumentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
