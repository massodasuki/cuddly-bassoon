import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratDocumentEntity } from './darat-documents.entity';

@Injectable()
export class DaratDocumentService {
  constructor(
    @InjectRepository(DaratDocumentEntity)
    private daratDocumentsRepository: Repository<DaratDocumentEntity>,
  ) {}

  findAll(): Promise<DaratDocumentEntity[]> {
    return this.daratDocumentsRepository.find();
  }

  findOne(id: string): Promise<DaratDocumentEntity> {
    return this.daratDocumentsRepository.findOneBy({ id });
  }
}
