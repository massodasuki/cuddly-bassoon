import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bCheckDocumentTwoEntity } from './ppv04b_check_document_two.entity';
import { CreatePpv04bCheckDocumentTwoDto } from './dto/create-ppv04b_check_document_two.dto';
import { UpdatePpv04bCheckDocumentTwoDto } from './dto/update-ppv04b_check_document_two.dto';

@Injectable()
export class Ppv04bCheckDocumentTwoService {
  constructor(
    @InjectRepository(Ppv04bCheckDocumentTwoEntity)
    private ppv04bCheckDocumentTwoRepository: Repository<Ppv04bCheckDocumentTwoEntity>,
  ) {}

  findAll(): Promise<Ppv04bCheckDocumentTwoEntity[]> {
    return this.ppv04bCheckDocumentTwoRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bCheckDocumentTwoEntity> {
    const entity = await this.ppv04bCheckDocumentTwoRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bCheckDocumentTwoEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bCheckDocumentTwoDto: CreatePpv04bCheckDocumentTwoDto): Promise<Ppv04bCheckDocumentTwoEntity> {
    const entity = this.ppv04bCheckDocumentTwoRepository.create(createPpv04bCheckDocumentTwoDto);
    return this.ppv04bCheckDocumentTwoRepository.save(entity);
  }

  async update(id: string, updatePpv04bCheckDocumentTwoDto: UpdatePpv04bCheckDocumentTwoDto): Promise<Ppv04bCheckDocumentTwoEntity> {
    await this.ppv04bCheckDocumentTwoRepository.update(id, updatePpv04bCheckDocumentTwoDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bCheckDocumentTwoRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bCheckDocumentTwoEntity[]> {
    return this.ppv04bCheckDocumentTwoRepository.find({
      where: { application_id: applicationId }
    });
  }
}