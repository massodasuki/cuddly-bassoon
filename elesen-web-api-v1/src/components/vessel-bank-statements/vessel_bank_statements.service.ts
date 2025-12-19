import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselBankStatementsEntity } from './vessel_bank_statements.entity';
import { CreateVesselBankStatementsDto } from './dto/create-vessel_bank_statements.dto';
import { UpdateVesselBankStatementsDto } from './dto/update-vessel_bank_statements.dto';

@Injectable()
export class VesselBankStatementsService {
  constructor(
    @InjectRepository(VesselBankStatementsEntity)
    private vesselBankStatementsRepository: Repository<VesselBankStatementsEntity>,
  ) {}

  findAll(): Promise<VesselBankStatementsEntity[]> {
    return this.vesselBankStatementsRepository.find();
  }

  async findOne(id: string): Promise<VesselBankStatementsEntity> {
    const entity = await this.vesselBankStatementsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselBankStatementsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselBankStatementsDto: CreateVesselBankStatementsDto): Promise<VesselBankStatementsEntity> {
    const entity = this.vesselBankStatementsRepository.create(createVesselBankStatementsDto);
    return this.vesselBankStatementsRepository.save(entity);
  }

  async update(id: string, updateVesselBankStatementsDto: UpdateVesselBankStatementsDto): Promise<VesselBankStatementsEntity> {
    await this.vesselBankStatementsRepository.update(id, updateVesselBankStatementsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselBankStatementsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselBankStatementsEntity[]> {
    return this.vesselBankStatementsRepository.find({
      where: { application_id: applicationId }
    });
  }
}