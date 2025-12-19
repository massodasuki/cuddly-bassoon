import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bSupportingDocAttachmentsEntity } from './ppv04b-supporting-doc-attachments.entity';
import { CreatePpv04bSupportingDocAttachmentsDto } from './dto/create-ppv04b-supporting-doc-attachments.dto';
import { UpdatePpv04bSupportingDocAttachmentsDto } from './dto/update-ppv04b-supporting-doc-attachments.dto';

@Injectable()
export class Ppv04bSupportingDocAttachmentsService {
  constructor(
    @InjectRepository(Ppv04bSupportingDocAttachmentsEntity)
    private ppv04bSupportingDocAttachmentsRepository: Repository<Ppv04bSupportingDocAttachmentsEntity>,
  ) {}

  findAll(): Promise<Ppv04bSupportingDocAttachmentsEntity[]> {
    return this.ppv04bSupportingDocAttachmentsRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bSupportingDocAttachmentsEntity> {
    const entity = await this.ppv04bSupportingDocAttachmentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bSupportingDocAttachmentsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bSupportingDocAttachmentsDto: CreatePpv04bSupportingDocAttachmentsDto): Promise<Ppv04bSupportingDocAttachmentsEntity> {
    const entity = this.ppv04bSupportingDocAttachmentsRepository.create(createPpv04bSupportingDocAttachmentsDto);
    return this.ppv04bSupportingDocAttachmentsRepository.save(entity);
  }

  async update(id: string, updatePpv04bSupportingDocAttachmentsDto: UpdatePpv04bSupportingDocAttachmentsDto): Promise<Ppv04bSupportingDocAttachmentsEntity> {
    await this.ppv04bSupportingDocAttachmentsRepository.update(id, updatePpv04bSupportingDocAttachmentsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bSupportingDocAttachmentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bSupportingDocAttachmentsEntity[]> {
    return this.ppv04bSupportingDocAttachmentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}