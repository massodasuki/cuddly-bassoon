import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselPaymentEntity } from './mppi_vessel_payment.entity';
import { CreateMppiVesselPaymentDto } from './dto/create-mppi_vessel_payment.dto';
import { UpdateMppiVesselPaymentDto } from './dto/update-mppi_vessel_payment.dto';

@Injectable()
export class MppiVesselPaymentService {
  constructor(
    @InjectRepository(MppiVesselPaymentEntity)
    private mppiVesselPaymentRepository: Repository<MppiVesselPaymentEntity>,
  ) {}

  findAll(): Promise<MppiVesselPaymentEntity[]> {
    return this.mppiVesselPaymentRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselPaymentEntity> {
    const entity = await this.mppiVesselPaymentRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselPaymentEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselPaymentDto: CreateMppiVesselPaymentDto): Promise<MppiVesselPaymentEntity> {
    const entity = this.mppiVesselPaymentRepository.create(createMppiVesselPaymentDto);
    return this.mppiVesselPaymentRepository.save(entity);
  }

  async update(id: string, updateMppiVesselPaymentDto: UpdateMppiVesselPaymentDto): Promise<MppiVesselPaymentEntity> {
    await this.mppiVesselPaymentRepository.update(id, updateMppiVesselPaymentDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselPaymentRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselPaymentEntity[]> {
    return this.mppiVesselPaymentRepository.find({
      where: { application_id: applicationId }
    });
  }
}