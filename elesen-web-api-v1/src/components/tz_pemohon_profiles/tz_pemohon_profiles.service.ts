import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TzPemohonProfilesEntity } from './tz_pemohon_profiles.entity';
import { CreateTzPemohonProfilesDto } from './dto/create-tz_pemohon_profiles.dto';
import { UpdateTzPemohonProfilesDto } from './dto/update-tz_pemohon_profiles.dto';

@Injectable()
export class TzPemohonProfilesService {
  constructor(
    @InjectRepository(TzPemohonProfilesEntity)
    private tzPemohonProfilesRepository: Repository<TzPemohonProfilesEntity>,
  ) {}

  findAll(): Promise<TzPemohonProfilesEntity[]> {
    return this.tzPemohonProfilesRepository.find();
  }

  async findOne(id: string): Promise<TzPemohonProfilesEntity> {
    const entity = await this.tzPemohonProfilesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`TzPemohonProfilesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createTzPemohonProfilesDto: CreateTzPemohonProfilesDto): Promise<TzPemohonProfilesEntity> {
    const entity = this.tzPemohonProfilesRepository.create(createTzPemohonProfilesDto);
    return this.tzPemohonProfilesRepository.save(entity);
  }

  async update(id: string, updateTzPemohonProfilesDto: UpdateTzPemohonProfilesDto): Promise<TzPemohonProfilesEntity> {
    await this.tzPemohonProfilesRepository.update(id, updateTzPemohonProfilesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.tzPemohonProfilesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<TzPemohonProfilesEntity[]> {
    return this.tzPemohonProfilesRepository.find({
      where: { application_id: applicationId }
    });
  }
}