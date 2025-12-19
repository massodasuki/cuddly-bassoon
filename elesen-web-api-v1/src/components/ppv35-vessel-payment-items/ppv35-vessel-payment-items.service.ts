import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv35VesselPaymentItemsEntity } from './ppv35-vessel-payment-items.entity';
import { CreatePpv35VesselPaymentItemsDto } from './dto/create-ppv35-vessel-payment-items.dto';
import { UpdatePpv35VesselPaymentItemsDto } from './dto/update-ppv35-vessel-payment-items.dto';

@Injectable()
export class Ppv35VesselPaymentItemsService {
  constructor(
    @InjectRepository(Ppv35VesselPaymentItemsEntity)
    private ppv35VesselPaymentItemsRepository: Repository<Ppv35VesselPaymentItemsEntity>,
  ) {}

  findAll(): Promise<Ppv35VesselPaymentItemsEntity[]> {
    return this.ppv35VesselPaymentItemsRepository.find();
  }

  async findOne(id: string): Promise<Ppv35VesselPaymentItemsEntity> {
    const entity = await this.ppv35VesselPaymentItemsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv35VesselPaymentItemsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv35VesselPaymentItemsDto: CreatePpv35VesselPaymentItemsDto): Promise<Ppv35VesselPaymentItemsEntity> {
    const entity = this.ppv35VesselPaymentItemsRepository.create(createPpv35VesselPaymentItemsDto);
    return this.ppv35VesselPaymentItemsRepository.save(entity);
  }

  async update(id: string, updatePpv35VesselPaymentItemsDto: UpdatePpv35VesselPaymentItemsDto): Promise<Ppv35VesselPaymentItemsEntity> {
    await this.ppv35VesselPaymentItemsRepository.update(id, updatePpv35VesselPaymentItemsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv35VesselPaymentItemsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv35VesselPaymentItemsEntity[]> {
    return this.ppv35VesselPaymentItemsRepository.find({
      where: { application_id: applicationId }
    });
  }
}