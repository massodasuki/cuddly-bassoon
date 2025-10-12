import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KruDocumentEntity } from './kru-documents.entity';

@Injectable()
export class KruDocumentService {
  constructor(
    @InjectRepository(KruDocumentEntity)
    private kruDocumentsRepository: Repository<KruDocumentEntity>,
  ) {}

  findAll(): Promise<KruDocumentEntity[]> {
    return this.kruDocumentsRepository.find();
  }

  findOne(id: string): Promise<KruDocumentEntity> {
    return this.kruDocumentsRepository.findOneBy({ id });
  }
}
