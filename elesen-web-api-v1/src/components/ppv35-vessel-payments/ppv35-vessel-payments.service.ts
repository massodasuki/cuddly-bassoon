import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv35VesselPaymentsEntity } from './ppv35-vessel-payments.entity';
import { CreatePpv35VesselPaymentsDto } from './dto/create-ppv35-vessel-payments.dto';
import { UpdatePpv35VesselPaymentsDto } from './dto/update-ppv35-vessel-payments.dto';

@Injectable()
export class Ppv35VesselPaymentsService {
  constructor(
    @InjectRepository(Ppv35VesselPaymentsEntity)
    private ppv35VesselPaymentsRepository: Repository<Ppv35VesselPaymentsEntity>,
  ) {}

  findAll(): Promise<Ppv35VesselPaymentsEntity[]> {
    return this.ppv35VesselPaymentsRepository.find();
  }

  async findOne(id: string): Promise<Ppv35VesselPaymentsEntity> {
    const entity = await this.ppv35VesselPaymentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv35VesselPaymentsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv35VesselPaymentsDto: CreatePpv35VesselPaymentsDto): Promise<Ppv35VesselPaymentsEntity> {
    const entity = this.ppv35VesselPaymentsRepository.create(createPpv35VesselPaymentsDto);
    return this.ppv35VesselPaymentsRepository.save(entity);
  }

  async update(id: string, updatePpv35VesselPaymentsDto: UpdatePpv35VesselPaymentsDto): Promise<Ppv35VesselPaymentsEntity> {
    await this.ppv35VesselPaymentsRepository.update(id, updatePpv35VesselPaymentsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv35VesselPaymentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv35VesselPaymentsEntity[]> {
    return this.ppv35VesselPaymentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}