import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TzPermohonansEntity } from './tz_permohonans.entity';
import { CreateTzPermohonansDto } from './dto/create-tz_permohonans.dto';
import { UpdateTzPermohonansDto } from './dto/update-tz_permohonans.dto';

@Injectable()
export class TzPermohonansService {
  constructor(
    @InjectRepository(TzPermohonansEntity)
    private tzPermohonansRepository: Repository<TzPermohonansEntity>,
  ) {}

  findAll(): Promise<TzPermohonansEntity[]> {
    return this.tzPermohonansRepository.find();
  }

  async findOne(id: string): Promise<TzPermohonansEntity> {
    const entity = await this.tzPermohonansRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`TzPermohonansEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createTzPermohonansDto: CreateTzPermohonansDto): Promise<TzPermohonansEntity> {
    const entity = this.tzPermohonansRepository.create(createTzPermohonansDto);
    return this.tzPermohonansRepository.save(entity);
  }

  async update(id: string, updateTzPermohonansDto: UpdateTzPermohonansDto): Promise<TzPermohonansEntity> {
    await this.tzPermohonansRepository.update(id, updateTzPermohonansDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.tzPermohonansRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<TzPermohonansEntity[]> {
    return this.tzPermohonansRepository.find({
      where: { application_id: applicationId }
    });
  }
}