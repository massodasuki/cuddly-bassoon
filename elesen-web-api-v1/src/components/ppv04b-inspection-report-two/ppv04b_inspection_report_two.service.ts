import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bInspectionReportTwoEntity } from './ppv04b_inspection_report_two.entity';
import { CreatePpv04bInspectionReportTwoDto } from './dto/create-ppv04b_inspection_report_two.dto';
import { UpdatePpv04bInspectionReportTwoDto } from './dto/update-ppv04b_inspection_report_two.dto';

@Injectable()
export class Ppv04bInspectionReportTwoService {
  constructor(
    @InjectRepository(Ppv04bInspectionReportTwoEntity)
    private ppv04bInspectionReportTwoRepository: Repository<Ppv04bInspectionReportTwoEntity>,
  ) {}

  findAll(): Promise<Ppv04bInspectionReportTwoEntity[]> {
    return this.ppv04bInspectionReportTwoRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bInspectionReportTwoEntity> {
    const entity = await this.ppv04bInspectionReportTwoRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bInspectionReportTwoEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bInspectionReportTwoDto: CreatePpv04bInspectionReportTwoDto): Promise<Ppv04bInspectionReportTwoEntity> {
    const entity = this.ppv04bInspectionReportTwoRepository.create(createPpv04bInspectionReportTwoDto);
    return this.ppv04bInspectionReportTwoRepository.save(entity);
  }

  async update(id: string, updatePpv04bInspectionReportTwoDto: UpdatePpv04bInspectionReportTwoDto): Promise<Ppv04bInspectionReportTwoEntity> {
    await this.ppv04bInspectionReportTwoRepository.update(id, updatePpv04bInspectionReportTwoDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bInspectionReportTwoRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bInspectionReportTwoEntity[]> {
    return this.ppv04bInspectionReportTwoRepository.find({
      where: { application_id: applicationId }
    });
  }
}