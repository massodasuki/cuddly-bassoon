import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04aVesselPaymentEntity } from './ppv04a-vessel-payment.entity';
import { CreatePpv04aVesselPaymentDto } from './dto/create-ppv04a-vessel-payment.dto';
import { UpdatePpv04aVesselPaymentDto } from './dto/update-ppv04a-vessel-payment.dto';

@Injectable()
export class Ppv04aVesselPaymentService {
  constructor(
    @InjectRepository(Ppv04aVesselPaymentEntity)
    private ppv04aVesselPaymentRepository: Repository<Ppv04aVesselPaymentEntity>,
  ) {}

  findAll(): Promise<Ppv04aVesselPaymentEntity[]> {
    return this.ppv04aVesselPaymentRepository.find();
  }

  async findOne(id: string): Promise<Ppv04aVesselPaymentEntity> {
    const entity = await this.ppv04aVesselPaymentRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04aVesselPaymentEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04aVesselPaymentDto: CreatePpv04aVesselPaymentDto): Promise<Ppv04aVesselPaymentEntity> {
    const entity = this.ppv04aVesselPaymentRepository.create(createPpv04aVesselPaymentDto);
    return this.ppv04aVesselPaymentRepository.save(entity);
  }

  async update(id: string, updatePpv04aVesselPaymentDto: UpdatePpv04aVesselPaymentDto): Promise<Ppv04aVesselPaymentEntity> {
    await this.ppv04aVesselPaymentRepository.update(id, updatePpv04aVesselPaymentDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04aVesselPaymentRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04aVesselPaymentEntity[]> {
    return this.ppv04aVesselPaymentRepository.find({
      where: { application_id: applicationId }
    });
  }
}