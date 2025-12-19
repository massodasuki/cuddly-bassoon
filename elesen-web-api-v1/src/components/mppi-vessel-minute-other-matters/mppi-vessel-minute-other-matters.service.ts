import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselMinuteOtherMattersEntity } from './mppi-vessel-minute-other-matters.entity';
import { CreateMppiVesselMinuteOtherMattersDto } from './dto/create-mppi-vessel-minute-other-matters.dto';
import { UpdateMppiVesselMinuteOtherMattersDto } from './dto/update-mppi-vessel-minute-other-matters.dto';

@Injectable()
export class MppiVesselMinuteOtherMattersService {
  constructor(
    @InjectRepository(MppiVesselMinuteOtherMattersEntity)
    private mppiVesselMinuteOtherMattersRepository: Repository<MppiVesselMinuteOtherMattersEntity>,
  ) {}

  findAll(): Promise<MppiVesselMinuteOtherMattersEntity[]> {
    return this.mppiVesselMinuteOtherMattersRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselMinuteOtherMattersEntity> {
    const entity = await this.mppiVesselMinuteOtherMattersRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselMinuteOtherMattersEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselMinuteOtherMattersDto: CreateMppiVesselMinuteOtherMattersDto): Promise<MppiVesselMinuteOtherMattersEntity> {
    const entity = this.mppiVesselMinuteOtherMattersRepository.create(createMppiVesselMinuteOtherMattersDto);
    return this.mppiVesselMinuteOtherMattersRepository.save(entity);
  }

  async update(id: string, updateMppiVesselMinuteOtherMattersDto: UpdateMppiVesselMinuteOtherMattersDto): Promise<MppiVesselMinuteOtherMattersEntity> {
    await this.mppiVesselMinuteOtherMattersRepository.update(id, updateMppiVesselMinuteOtherMattersDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselMinuteOtherMattersRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselMinuteOtherMattersEntity[]> {
    return this.mppiVesselMinuteOtherMattersRepository.find({
      where: { application_id: applicationId }
    });
  }
}