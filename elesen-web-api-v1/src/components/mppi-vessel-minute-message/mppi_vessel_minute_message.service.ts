import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselMinuteMessageEntity } from './mppi_vessel_minute_message.entity';
import { CreateMppiVesselMinuteMessageDto } from './dto/create-mppi_vessel_minute_message.dto';
import { UpdateMppiVesselMinuteMessageDto } from './dto/update-mppi_vessel_minute_message.dto';

@Injectable()
export class MppiVesselMinuteMessageService {
  constructor(
    @InjectRepository(MppiVesselMinuteMessageEntity)
    private mppiVesselMinuteMessageRepository: Repository<MppiVesselMinuteMessageEntity>,
  ) {}

  findAll(): Promise<MppiVesselMinuteMessageEntity[]> {
    return this.mppiVesselMinuteMessageRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselMinuteMessageEntity> {
    const entity = await this.mppiVesselMinuteMessageRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselMinuteMessageEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselMinuteMessageDto: CreateMppiVesselMinuteMessageDto): Promise<MppiVesselMinuteMessageEntity> {
    const entity = this.mppiVesselMinuteMessageRepository.create(createMppiVesselMinuteMessageDto);
    return this.mppiVesselMinuteMessageRepository.save(entity);
  }

  async update(id: string, updateMppiVesselMinuteMessageDto: UpdateMppiVesselMinuteMessageDto): Promise<MppiVesselMinuteMessageEntity> {
    await this.mppiVesselMinuteMessageRepository.update(id, updateMppiVesselMinuteMessageDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselMinuteMessageRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselMinuteMessageEntity[]> {
    return this.mppiVesselMinuteMessageRepository.find({
      where: { application_id: applicationId }
    });
  }
}