import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselAuditedFinancialStatementsEntity } from './vessel_audited_financial_statements.entity';
import { CreateVesselAuditedFinancialStatementsDto } from './dto/create-vessel_audited_financial_statements.dto';
import { UpdateVesselAuditedFinancialStatementsDto } from './dto/update-vessel_audited_financial_statements.dto';

@Injectable()
export class VesselAuditedFinancialStatementsService {
  constructor(
    @InjectRepository(VesselAuditedFinancialStatementsEntity)
    private vesselAuditedFinancialStatementsRepository: Repository<VesselAuditedFinancialStatementsEntity>,
  ) {}

  findAll(): Promise<VesselAuditedFinancialStatementsEntity[]> {
    return this.vesselAuditedFinancialStatementsRepository.find();
  }

  async findOne(id: string): Promise<VesselAuditedFinancialStatementsEntity> {
    const entity = await this.vesselAuditedFinancialStatementsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselAuditedFinancialStatementsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselAuditedFinancialStatementsDto: CreateVesselAuditedFinancialStatementsDto): Promise<VesselAuditedFinancialStatementsEntity> {
    const entity = this.vesselAuditedFinancialStatementsRepository.create(createVesselAuditedFinancialStatementsDto);
    return this.vesselAuditedFinancialStatementsRepository.save(entity);
  }

  async update(id: string, updateVesselAuditedFinancialStatementsDto: UpdateVesselAuditedFinancialStatementsDto): Promise<VesselAuditedFinancialStatementsEntity> {
    await this.vesselAuditedFinancialStatementsRepository.update(id, updateVesselAuditedFinancialStatementsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselAuditedFinancialStatementsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselAuditedFinancialStatementsEntity[]> {
    return this.vesselAuditedFinancialStatementsRepository.find({
      where: { application_id: applicationId }
    });
  }
}