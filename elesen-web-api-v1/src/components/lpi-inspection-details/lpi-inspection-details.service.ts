import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LpiInspectionDetailsEntity } from './lpi-inspection-details.entity';
import { CreateLpiInspectionDetailsDto } from './dto/create-lpi-inspection-details.dto';
import { UpdateLpiInspectionDetailsDto } from './dto/update-lpi-inspection-details.dto';

@Injectable()
export class LpiInspectionDetailsService {
  constructor(
    @InjectRepository(LpiInspectionDetailsEntity)
    private lpiInspectionDetailsRepository: Repository<LpiInspectionDetailsEntity>,
  ) {}

  findAll(): Promise<LpiInspectionDetailsEntity[]> {
    return this.lpiInspectionDetailsRepository.find();
  }

  async findOne(id: string): Promise<LpiInspectionDetailsEntity> {
    const entity = await this.lpiInspectionDetailsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`LpiInspectionDetailsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createLpiInspectionDetailsDto: CreateLpiInspectionDetailsDto): Promise<LpiInspectionDetailsEntity> {
    const entity = this.lpiInspectionDetailsRepository.create(createLpiInspectionDetailsDto);
    return this.lpiInspectionDetailsRepository.save(entity);
  }

  async update(id: string, updateLpiInspectionDetailsDto: UpdateLpiInspectionDetailsDto): Promise<LpiInspectionDetailsEntity> {
    await this.lpiInspectionDetailsRepository.update(id, updateLpiInspectionDetailsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.lpiInspectionDetailsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<LpiInspectionDetailsEntity[]> {
    return this.lpiInspectionDetailsRepository.find({
      where: { application_id: applicationId }
    });
  }
}