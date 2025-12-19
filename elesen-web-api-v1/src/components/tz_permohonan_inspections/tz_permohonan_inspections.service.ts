import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TzPermohonanInspectionsEntity } from './tz_permohonan_inspections.entity';
import { CreateTzPermohonanInspectionsDto } from './dto/create-tz_permohonan_inspections.dto';
import { UpdateTzPermohonanInspectionsDto } from './dto/update-tz_permohonan_inspections.dto';

@Injectable()
export class TzPermohonanInspectionsService {
  constructor(
    @InjectRepository(TzPermohonanInspectionsEntity)
    private tzPermohonanInspectionsRepository: Repository<TzPermohonanInspectionsEntity>,
  ) {}

  findAll(): Promise<TzPermohonanInspectionsEntity[]> {
    return this.tzPermohonanInspectionsRepository.find();
  }

  async findOne(id: string): Promise<TzPermohonanInspectionsEntity> {
    const entity = await this.tzPermohonanInspectionsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`TzPermohonanInspectionsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createTzPermohonanInspectionsDto: CreateTzPermohonanInspectionsDto): Promise<TzPermohonanInspectionsEntity> {
    const entity = this.tzPermohonanInspectionsRepository.create(createTzPermohonanInspectionsDto);
    return this.tzPermohonanInspectionsRepository.save(entity);
  }

  async update(id: string, updateTzPermohonanInspectionsDto: UpdateTzPermohonanInspectionsDto): Promise<TzPermohonanInspectionsEntity> {
    await this.tzPermohonanInspectionsRepository.update(id, updateTzPermohonanInspectionsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.tzPermohonanInspectionsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<TzPermohonanInspectionsEntity[]> {
    return this.tzPermohonanInspectionsRepository.find({
      where: { application_id: applicationId }
    });
  }
}