import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bCheckDocumentEntity } from './ppv04b_check_document.entity';
import { CreatePpv04bCheckDocumentDto } from './dto/create-ppv04b_check_document.dto';
import { UpdatePpv04bCheckDocumentDto } from './dto/update-ppv04b_check_document.dto';

@Injectable()
export class Ppv04bCheckDocumentService {
  constructor(
    @InjectRepository(Ppv04bCheckDocumentEntity)
    private ppv04bCheckDocumentRepository: Repository<Ppv04bCheckDocumentEntity>,
  ) {}

  findAll(): Promise<Ppv04bCheckDocumentEntity[]> {
    return this.ppv04bCheckDocumentRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bCheckDocumentEntity> {
    const entity = await this.ppv04bCheckDocumentRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bCheckDocumentEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bCheckDocumentDto: CreatePpv04bCheckDocumentDto): Promise<Ppv04bCheckDocumentEntity> {
    const entity = this.ppv04bCheckDocumentRepository.create(createPpv04bCheckDocumentDto);
    return this.ppv04bCheckDocumentRepository.save(entity);
  }

  async update(id: string, updatePpv04bCheckDocumentDto: UpdatePpv04bCheckDocumentDto): Promise<Ppv04bCheckDocumentEntity> {
    await this.ppv04bCheckDocumentRepository.update(id, updatePpv04bCheckDocumentDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bCheckDocumentRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bCheckDocumentEntity[]> {
    return this.ppv04bCheckDocumentRepository.find({
      where: { application_id: applicationId }
    });
  }
}