import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TzPermohonanRayuansEntity } from './tz_permohonan_rayuans.entity';
import { CreateTzPermohonanRayuansDto } from './dto/create-tz_permohonan_rayuans.dto';
import { UpdateTzPermohonanRayuansDto } from './dto/update-tz_permohonan_rayuans.dto';

@Injectable()
export class TzPermohonanRayuansService {
  constructor(
    @InjectRepository(TzPermohonanRayuansEntity)
    private tzPermohonanRayuansRepository: Repository<TzPermohonanRayuansEntity>,
  ) {}

  findAll(): Promise<TzPermohonanRayuansEntity[]> {
    return this.tzPermohonanRayuansRepository.find();
  }

  async findOne(id: string): Promise<TzPermohonanRayuansEntity> {
    const entity = await this.tzPermohonanRayuansRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`TzPermohonanRayuansEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createTzPermohonanRayuansDto: CreateTzPermohonanRayuansDto): Promise<TzPermohonanRayuansEntity> {
    const entity = this.tzPermohonanRayuansRepository.create(createTzPermohonanRayuansDto);
    return this.tzPermohonanRayuansRepository.save(entity);
  }

  async update(id: string, updateTzPermohonanRayuansDto: UpdateTzPermohonanRayuansDto): Promise<TzPermohonanRayuansEntity> {
    await this.tzPermohonanRayuansRepository.update(id, updateTzPermohonanRayuansDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.tzPermohonanRayuansRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<TzPermohonanRayuansEntity[]> {
    return this.tzPermohonanRayuansRepository.find({
      where: { application_id: applicationId }
    });
  }
}