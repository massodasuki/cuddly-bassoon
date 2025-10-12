import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KruApplicationDocumentEntity } from './kru-application-documents.entity';

@Injectable()
export class KruApplicationDocumentService {
  constructor(
    @InjectRepository(KruApplicationDocumentEntity)
    private kruApplicationDocumentsRepository: Repository<KruApplicationDocumentEntity>,
  ) {}

  findAll(): Promise<KruApplicationDocumentEntity[]> {
    return this.kruApplicationDocumentsRepository.find();
  }

  findOne(id: string): Promise<KruApplicationDocumentEntity> {
    return this.kruApplicationDocumentsRepository.findOneBy({ id });
  }
}
