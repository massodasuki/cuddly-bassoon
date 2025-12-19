import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04aVesselPaymentInfoEntity } from './ppv04a-vessel-payment-info.entity';
import { CreatePpv04aVesselPaymentInfoDto } from './dto/create-ppv04a-vessel-payment-info.dto';
import { UpdatePpv04aVesselPaymentInfoDto } from './dto/update-ppv04a-vessel-payment-info.dto';

@Injectable()
export class Ppv04aVesselPaymentInfoService {
  constructor(
    @InjectRepository(Ppv04aVesselPaymentInfoEntity)
    private ppv04aVesselPaymentInfoRepository: Repository<Ppv04aVesselPaymentInfoEntity>,
  ) {}

  findAll(): Promise<Ppv04aVesselPaymentInfoEntity[]> {
    return this.ppv04aVesselPaymentInfoRepository.find();
  }

  async findOne(id: string): Promise<Ppv04aVesselPaymentInfoEntity> {
    const entity = await this.ppv04aVesselPaymentInfoRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04aVesselPaymentInfoEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04aVesselPaymentInfoDto: CreatePpv04aVesselPaymentInfoDto): Promise<Ppv04aVesselPaymentInfoEntity> {
    const entity = this.ppv04aVesselPaymentInfoRepository.create(createPpv04aVesselPaymentInfoDto);
    return this.ppv04aVesselPaymentInfoRepository.save(entity);
  }

  async update(id: string, updatePpv04aVesselPaymentInfoDto: UpdatePpv04aVesselPaymentInfoDto): Promise<Ppv04aVesselPaymentInfoEntity> {
    await this.ppv04aVesselPaymentInfoRepository.update(id, updatePpv04aVesselPaymentInfoDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04aVesselPaymentInfoRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04aVesselPaymentInfoEntity[]> {
    return this.ppv04aVesselPaymentInfoRepository.find({
      where: { application_id: applicationId }
    });
  }
}