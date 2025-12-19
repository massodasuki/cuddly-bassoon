import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bInspectionLpiEntity } from './ppv04b-inspection-lpi.entity';
import { CreatePpv04bInspectionLpiDto } from './dto/create-ppv04b-inspection-lpi.dto';
import { UpdatePpv04bInspectionLpiDto } from './dto/update-ppv04b-inspection-lpi.dto';

@Injectable()
export class Ppv04bInspectionLpiService {
  constructor(
    @InjectRepository(Ppv04bInspectionLpiEntity)
    private ppv04bInspectionLpiRepository: Repository<Ppv04bInspectionLpiEntity>,
  ) {}

  findAll(): Promise<Ppv04bInspectionLpiEntity[]> {
    return this.ppv04bInspectionLpiRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bInspectionLpiEntity> {
    const entity = await this.ppv04bInspectionLpiRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bInspectionLpiEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bInspectionLpiDto: CreatePpv04bInspectionLpiDto): Promise<Ppv04bInspectionLpiEntity> {
    const entity = this.ppv04bInspectionLpiRepository.create(createPpv04bInspectionLpiDto);
    return this.ppv04bInspectionLpiRepository.save(entity);
  }

  async update(id: string, updatePpv04bInspectionLpiDto: UpdatePpv04bInspectionLpiDto): Promise<Ppv04bInspectionLpiEntity> {
    await this.ppv04bInspectionLpiRepository.update(id, updatePpv04bInspectionLpiDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bInspectionLpiRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bInspectionLpiEntity[]> {
    return this.ppv04bInspectionLpiRepository.find({
      where: { application_id: applicationId }
    });
  }
}