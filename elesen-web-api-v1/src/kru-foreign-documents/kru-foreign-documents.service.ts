import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KruForeignDocumentEntity } from './kru-foreign-documents.entity';

@Injectable()
export class KruForeignDocumentService {
  constructor(
    @InjectRepository(KruForeignDocumentEntity)
    private kruForeignDocumentsRepository: Repository<KruForeignDocumentEntity>,
  ) {}

  findAll(): Promise<KruForeignDocumentEntity[]> {
    return this.kruForeignDocumentsRepository.find();
  }

  findOne(id: string): Promise<KruForeignDocumentEntity> {
    return this.kruForeignDocumentsRepository.findOneBy({ id });
  }
}
