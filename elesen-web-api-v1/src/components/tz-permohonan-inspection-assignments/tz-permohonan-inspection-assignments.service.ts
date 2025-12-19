import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TzPermohonanInspectionAssignmentsEntity } from './tz-permohonan-inspection-assignments.entity';
import { CreateTzPermohonanInspectionAssignmentsDto } from './dto/create-tz-permohonan-inspection-assignments.dto';
import { UpdateTzPermohonanInspectionAssignmentsDto } from './dto/update-tz-permohonan-inspection-assignments.dto';

@Injectable()
export class TzPermohonanInspectionAssignmentsService {
  constructor(
    @InjectRepository(TzPermohonanInspectionAssignmentsEntity)
    private tzPermohonanInspectionAssignmentsRepository: Repository<TzPermohonanInspectionAssignmentsEntity>,
  ) {}

  findAll(): Promise<TzPermohonanInspectionAssignmentsEntity[]> {
    return this.tzPermohonanInspectionAssignmentsRepository.find();
  }

  async findOne(id: string): Promise<TzPermohonanInspectionAssignmentsEntity> {
    const entity = await this.tzPermohonanInspectionAssignmentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`TzPermohonanInspectionAssignmentsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createTzPermohonanInspectionAssignmentsDto: CreateTzPermohonanInspectionAssignmentsDto): Promise<TzPermohonanInspectionAssignmentsEntity> {
    const entity = this.tzPermohonanInspectionAssignmentsRepository.create(createTzPermohonanInspectionAssignmentsDto);
    return this.tzPermohonanInspectionAssignmentsRepository.save(entity);
  }

  async update(id: string, updateTzPermohonanInspectionAssignmentsDto: UpdateTzPermohonanInspectionAssignmentsDto): Promise<TzPermohonanInspectionAssignmentsEntity> {
    await this.tzPermohonanInspectionAssignmentsRepository.update(id, updateTzPermohonanInspectionAssignmentsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.tzPermohonanInspectionAssignmentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<TzPermohonanInspectionAssignmentsEntity[]> {
    return this.tzPermohonanInspectionAssignmentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}