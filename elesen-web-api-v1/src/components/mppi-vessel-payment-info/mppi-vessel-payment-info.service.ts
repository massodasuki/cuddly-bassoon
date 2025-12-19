import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselPaymentInfoEntity } from './mppi-vessel-payment-info.entity';
import { CreateMppiVesselPaymentInfoDto } from './dto/create-mppi-vessel-payment-info.dto';
import { UpdateMppiVesselPaymentInfoDto } from './dto/update-mppi-vessel-payment-info.dto';

@Injectable()
export class MppiVesselPaymentInfoService {
  constructor(
    @InjectRepository(MppiVesselPaymentInfoEntity)
    private mppiVesselPaymentInfoRepository: Repository<MppiVesselPaymentInfoEntity>,
  ) {}

  findAll(): Promise<MppiVesselPaymentInfoEntity[]> {
    return this.mppiVesselPaymentInfoRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselPaymentInfoEntity> {
    const entity = await this.mppiVesselPaymentInfoRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselPaymentInfoEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselPaymentInfoDto: CreateMppiVesselPaymentInfoDto): Promise<MppiVesselPaymentInfoEntity> {
    const entity = this.mppiVesselPaymentInfoRepository.create(createMppiVesselPaymentInfoDto);
    return this.mppiVesselPaymentInfoRepository.save(entity);
  }

  async update(id: string, updateMppiVesselPaymentInfoDto: UpdateMppiVesselPaymentInfoDto): Promise<MppiVesselPaymentInfoEntity> {
    await this.mppiVesselPaymentInfoRepository.update(id, updateMppiVesselPaymentInfoDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselPaymentInfoRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselPaymentInfoEntity[]> {
    return this.mppiVesselPaymentInfoRepository.find({
      where: { application_id: applicationId }
    });
  }
}