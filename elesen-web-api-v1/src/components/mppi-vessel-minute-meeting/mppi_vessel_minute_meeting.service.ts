import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselMinuteMeetingEntity } from './mppi_vessel_minute_meeting.entity';
import { CreateMppiVesselMinuteMeetingDto } from './dto/create-mppi_vessel_minute_meeting.dto';
import { UpdateMppiVesselMinuteMeetingDto } from './dto/update-mppi_vessel_minute_meeting.dto';

@Injectable()
export class MppiVesselMinuteMeetingService {
  constructor(
    @InjectRepository(MppiVesselMinuteMeetingEntity)
    private mppiVesselMinuteMeetingRepository: Repository<MppiVesselMinuteMeetingEntity>,
  ) {}

  findAll(): Promise<MppiVesselMinuteMeetingEntity[]> {
    return this.mppiVesselMinuteMeetingRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselMinuteMeetingEntity> {
    const entity = await this.mppiVesselMinuteMeetingRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselMinuteMeetingEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselMinuteMeetingDto: CreateMppiVesselMinuteMeetingDto): Promise<MppiVesselMinuteMeetingEntity> {
    const entity = this.mppiVesselMinuteMeetingRepository.create(createMppiVesselMinuteMeetingDto);
    return this.mppiVesselMinuteMeetingRepository.save(entity);
  }

  async update(id: string, updateMppiVesselMinuteMeetingDto: UpdateMppiVesselMinuteMeetingDto): Promise<MppiVesselMinuteMeetingEntity> {
    await this.mppiVesselMinuteMeetingRepository.update(id, updateMppiVesselMinuteMeetingDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselMinuteMeetingRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselMinuteMeetingEntity[]> {
    return this.mppiVesselMinuteMeetingRepository.find({
      where: { application_id: applicationId }
    });
  }
}