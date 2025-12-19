import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LpiInspectionsEntity } from './lpi-inspections.entity';
import { CreateLpiInspectionsDto } from './dto/create-lpi-inspections.dto';
import { UpdateLpiInspectionsDto } from './dto/update-lpi-inspections.dto';

@Injectable()
export class LpiInspectionsService {
  constructor(
    @InjectRepository(LpiInspectionsEntity)
    private lpiInspectionsRepository: Repository<LpiInspectionsEntity>,
  ) {}

  findAll(): Promise<LpiInspectionsEntity[]> {
    return this.lpiInspectionsRepository.find();
  }

  async findOne(id: string): Promise<LpiInspectionsEntity> {
    const entity = await this.lpiInspectionsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`LpiInspectionsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createLpiInspectionsDto: CreateLpiInspectionsDto): Promise<LpiInspectionsEntity> {
    const entity = this.lpiInspectionsRepository.create(createLpiInspectionsDto);
    return this.lpiInspectionsRepository.save(entity);
  }

  async update(id: string, updateLpiInspectionsDto: UpdateLpiInspectionsDto): Promise<LpiInspectionsEntity> {
    await this.lpiInspectionsRepository.update(id, updateLpiInspectionsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.lpiInspectionsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<LpiInspectionsEntity[]> {
    return this.lpiInspectionsRepository.find({
      where: { application_id: applicationId }
    });
  }
}