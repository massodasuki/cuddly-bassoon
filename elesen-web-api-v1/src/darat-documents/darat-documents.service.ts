import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<DaratDocumentEntity> {
    const entity = await this.daratDocumentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
