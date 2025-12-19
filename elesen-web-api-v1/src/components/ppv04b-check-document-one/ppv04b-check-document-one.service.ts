import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bCheckDocumentOneEntity } from './ppv04b-check-document-one.entity';
import { CreatePpv04bCheckDocumentOneDto } from './dto/create-ppv04b-check-document-one.dto';
import { UpdatePpv04bCheckDocumentOneDto } from './dto/update-ppv04b-check-document-one.dto';

@Injectable()
export class Ppv04bCheckDocumentOneService {
  constructor(
    @InjectRepository(Ppv04bCheckDocumentOneEntity)
    private ppv04bCheckDocumentOneRepository: Repository<Ppv04bCheckDocumentOneEntity>,
  ) {}

  findAll(): Promise<Ppv04bCheckDocumentOneEntity[]> {
    return this.ppv04bCheckDocumentOneRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bCheckDocumentOneEntity> {
    const entity = await this.ppv04bCheckDocumentOneRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bCheckDocumentOneEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bCheckDocumentOneDto: CreatePpv04bCheckDocumentOneDto): Promise<Ppv04bCheckDocumentOneEntity> {
    const entity = this.ppv04bCheckDocumentOneRepository.create(createPpv04bCheckDocumentOneDto);
    return this.ppv04bCheckDocumentOneRepository.save(entity);
  }

  async update(id: string, updatePpv04bCheckDocumentOneDto: UpdatePpv04bCheckDocumentOneDto): Promise<Ppv04bCheckDocumentOneEntity> {
    await this.ppv04bCheckDocumentOneRepository.update(id, updatePpv04bCheckDocumentOneDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bCheckDocumentOneRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bCheckDocumentOneEntity[]> {
    return this.ppv04bCheckDocumentOneRepository.find({
      where: { application_id: applicationId }
    });
  }
}