import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TzPermohonanStatusHistoriesEntity } from './tz-permohonan-status-histories.entity';
import { CreateTzPermohonanStatusHistoriesDto } from './dto/create-tz-permohonan-status-histories.dto';
import { UpdateTzPermohonanStatusHistoriesDto } from './dto/update-tz-permohonan-status-histories.dto';

@Injectable()
export class TzPermohonanStatusHistoriesService {
  constructor(
    @InjectRepository(TzPermohonanStatusHistoriesEntity)
    private tzPermohonanStatusHistoriesRepository: Repository<TzPermohonanStatusHistoriesEntity>,
  ) {}

  findAll(): Promise<TzPermohonanStatusHistoriesEntity[]> {
    return this.tzPermohonanStatusHistoriesRepository.find();
  }

  async findOne(id: string): Promise<TzPermohonanStatusHistoriesEntity> {
    const entity = await this.tzPermohonanStatusHistoriesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`TzPermohonanStatusHistoriesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createTzPermohonanStatusHistoriesDto: CreateTzPermohonanStatusHistoriesDto): Promise<TzPermohonanStatusHistoriesEntity> {
    const entity = this.tzPermohonanStatusHistoriesRepository.create(createTzPermohonanStatusHistoriesDto);
    return this.tzPermohonanStatusHistoriesRepository.save(entity);
  }

  async update(id: string, updateTzPermohonanStatusHistoriesDto: UpdateTzPermohonanStatusHistoriesDto): Promise<TzPermohonanStatusHistoriesEntity> {
    await this.tzPermohonanStatusHistoriesRepository.update(id, updateTzPermohonanStatusHistoriesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.tzPermohonanStatusHistoriesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<TzPermohonanStatusHistoriesEntity[]> {
    return this.tzPermohonanStatusHistoriesRepository.find({
      where: { application_id: applicationId }
    });
  }
}