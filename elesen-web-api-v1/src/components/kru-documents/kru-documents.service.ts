import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<KruDocumentEntity> {
    const entity = await this.kruDocumentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

