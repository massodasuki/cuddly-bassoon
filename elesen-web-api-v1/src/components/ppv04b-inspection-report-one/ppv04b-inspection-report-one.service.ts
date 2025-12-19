import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bInspectionReportOneEntity } from './ppv04b-inspection-report-one.entity';
import { CreatePpv04bInspectionReportOneDto } from './dto/create-ppv04b-inspection-report-one.dto';
import { UpdatePpv04bInspectionReportOneDto } from './dto/update-ppv04b-inspection-report-one.dto';

@Injectable()
export class Ppv04bInspectionReportOneService {
  constructor(
    @InjectRepository(Ppv04bInspectionReportOneEntity)
    private ppv04bInspectionReportOneRepository: Repository<Ppv04bInspectionReportOneEntity>,
  ) {}

  findAll(): Promise<Ppv04bInspectionReportOneEntity[]> {
    return this.ppv04bInspectionReportOneRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bInspectionReportOneEntity> {
    const entity = await this.ppv04bInspectionReportOneRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bInspectionReportOneEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bInspectionReportOneDto: CreatePpv04bInspectionReportOneDto): Promise<Ppv04bInspectionReportOneEntity> {
    const entity = this.ppv04bInspectionReportOneRepository.create(createPpv04bInspectionReportOneDto);
    return this.ppv04bInspectionReportOneRepository.save(entity);
  }

  async update(id: string, updatePpv04bInspectionReportOneDto: UpdatePpv04bInspectionReportOneDto): Promise<Ppv04bInspectionReportOneEntity> {
    await this.ppv04bInspectionReportOneRepository.update(id, updatePpv04bInspectionReportOneDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bInspectionReportOneRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bInspectionReportOneEntity[]> {
    return this.ppv04bInspectionReportOneRepository.find({
      where: { application_id: applicationId }
    });
  }
}