import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TzPermohonanRayuanDocumentsEntity } from './tz_permohonan_rayuan_documents.entity';
import { CreateTzPermohonanRayuanDocumentsDto } from './dto/create-tz_permohonan_rayuan_documents.dto';
import { UpdateTzPermohonanRayuanDocumentsDto } from './dto/update-tz_permohonan_rayuan_documents.dto';

@Injectable()
export class TzPermohonanRayuanDocumentsService {
  constructor(
    @InjectRepository(TzPermohonanRayuanDocumentsEntity)
    private tzPermohonanRayuanDocumentsRepository: Repository<TzPermohonanRayuanDocumentsEntity>,
  ) {}

  findAll(): Promise<TzPermohonanRayuanDocumentsEntity[]> {
    return this.tzPermohonanRayuanDocumentsRepository.find();
  }

  async findOne(id: string): Promise<TzPermohonanRayuanDocumentsEntity> {
    const entity = await this.tzPermohonanRayuanDocumentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`TzPermohonanRayuanDocumentsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createTzPermohonanRayuanDocumentsDto: CreateTzPermohonanRayuanDocumentsDto): Promise<TzPermohonanRayuanDocumentsEntity> {
    const entity = this.tzPermohonanRayuanDocumentsRepository.create(createTzPermohonanRayuanDocumentsDto);
    return this.tzPermohonanRayuanDocumentsRepository.save(entity);
  }

  async update(id: string, updateTzPermohonanRayuanDocumentsDto: UpdateTzPermohonanRayuanDocumentsDto): Promise<TzPermohonanRayuanDocumentsEntity> {
    await this.tzPermohonanRayuanDocumentsRepository.update(id, updateTzPermohonanRayuanDocumentsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.tzPermohonanRayuanDocumentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<TzPermohonanRayuanDocumentsEntity[]> {
    return this.tzPermohonanRayuanDocumentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}