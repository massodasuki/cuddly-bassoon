import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TzPermohonanDocumentsEntity } from './tz-permohonan-documents.entity';
import { CreateTzPermohonanDocumentsDto } from './dto/create-tz-permohonan-documents.dto';
import { UpdateTzPermohonanDocumentsDto } from './dto/update-tz-permohonan-documents.dto';

@Injectable()
export class TzPermohonanDocumentsService {
  constructor(
    @InjectRepository(TzPermohonanDocumentsEntity)
    private tzPermohonanDocumentsRepository: Repository<TzPermohonanDocumentsEntity>,
  ) {}

  findAll(): Promise<TzPermohonanDocumentsEntity[]> {
    return this.tzPermohonanDocumentsRepository.find();
  }

  async findOne(id: string): Promise<TzPermohonanDocumentsEntity> {
    const entity = await this.tzPermohonanDocumentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`TzPermohonanDocumentsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createTzPermohonanDocumentsDto: CreateTzPermohonanDocumentsDto): Promise<TzPermohonanDocumentsEntity> {
    const entity = this.tzPermohonanDocumentsRepository.create(createTzPermohonanDocumentsDto);
    return this.tzPermohonanDocumentsRepository.save(entity);
  }

  async update(id: string, updateTzPermohonanDocumentsDto: UpdateTzPermohonanDocumentsDto): Promise<TzPermohonanDocumentsEntity> {
    await this.tzPermohonanDocumentsRepository.update(id, updateTzPermohonanDocumentsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.tzPermohonanDocumentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<TzPermohonanDocumentsEntity[]> {
    return this.tzPermohonanDocumentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}