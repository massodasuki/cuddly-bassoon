import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<LandingDocumentEntity> {
    return this.landingDocumentsRepository.findOneBy({ id });
  }
}
