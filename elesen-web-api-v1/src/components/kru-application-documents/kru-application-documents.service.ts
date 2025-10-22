import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<KruApplicationDocumentEntity> {
    const entity = await this.kruApplicationDocumentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
