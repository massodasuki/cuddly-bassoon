import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationChangeVesselToolPaymentEntity } from './application_change_vessel_tool_payment.entity';
import { CreateApplicationChangeVesselToolPaymentDto } from './dto/create-application_change_vessel_tool_payment.dto';
import { UpdateApplicationChangeVesselToolPaymentDto } from './dto/update-application_change_vessel_tool_payment.dto';

@Injectable()
export class ApplicationChangeVesselToolPaymentService {
  constructor(
    @InjectRepository(ApplicationChangeVesselToolPaymentEntity)
    private applicationChangeVesselToolPaymentRepository: Repository<ApplicationChangeVesselToolPaymentEntity>,
  ) {}

  findAll(): Promise<ApplicationChangeVesselToolPaymentEntity[]> {
    return this.applicationChangeVesselToolPaymentRepository.find();
  }

  async findOne(id: string): Promise<ApplicationChangeVesselToolPaymentEntity> {
    const entity = await this.applicationChangeVesselToolPaymentRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationChangeVesselToolPaymentEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationChangeVesselToolPaymentDto: CreateApplicationChangeVesselToolPaymentDto): Promise<ApplicationChangeVesselToolPaymentEntity> {
    const entity = this.applicationChangeVesselToolPaymentRepository.create(createApplicationChangeVesselToolPaymentDto);
    return this.applicationChangeVesselToolPaymentRepository.save(entity);
  }

  async update(id: string, updateApplicationChangeVesselToolPaymentDto: UpdateApplicationChangeVesselToolPaymentDto): Promise<ApplicationChangeVesselToolPaymentEntity> {
    await this.applicationChangeVesselToolPaymentRepository.update(id, updateApplicationChangeVesselToolPaymentDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationChangeVesselToolPaymentRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationChangeVesselToolPaymentEntity[]> {
    return this.applicationChangeVesselToolPaymentRepository.find({
      where: { application_id: applicationId }
    });
  }
}