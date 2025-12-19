import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04aVesselMinuteMeetingEntity } from './ppv04a_vessel_minute_meeting.entity';
import { CreatePpv04aVesselMinuteMeetingDto } from './dto/create-ppv04a_vessel_minute_meeting.dto';
import { UpdatePpv04aVesselMinuteMeetingDto } from './dto/update-ppv04a_vessel_minute_meeting.dto';

@Injectable()
export class Ppv04aVesselMinuteMeetingService {
  constructor(
    @InjectRepository(Ppv04aVesselMinuteMeetingEntity)
    private ppv04aVesselMinuteMeetingRepository: Repository<Ppv04aVesselMinuteMeetingEntity>,
  ) {}

  findAll(): Promise<Ppv04aVesselMinuteMeetingEntity[]> {
    return this.ppv04aVesselMinuteMeetingRepository.find();
  }

  async findOne(id: string): Promise<Ppv04aVesselMinuteMeetingEntity> {
    const entity = await this.ppv04aVesselMinuteMeetingRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04aVesselMinuteMeetingEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04aVesselMinuteMeetingDto: CreatePpv04aVesselMinuteMeetingDto): Promise<Ppv04aVesselMinuteMeetingEntity> {
    const entity = this.ppv04aVesselMinuteMeetingRepository.create(createPpv04aVesselMinuteMeetingDto);
    return this.ppv04aVesselMinuteMeetingRepository.save(entity);
  }

  async update(id: string, updatePpv04aVesselMinuteMeetingDto: UpdatePpv04aVesselMinuteMeetingDto): Promise<Ppv04aVesselMinuteMeetingEntity> {
    await this.ppv04aVesselMinuteMeetingRepository.update(id, updatePpv04aVesselMinuteMeetingDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04aVesselMinuteMeetingRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04aVesselMinuteMeetingEntity[]> {
    return this.ppv04aVesselMinuteMeetingRepository.find({
      where: { application_id: applicationId }
    });
  }
}