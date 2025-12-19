import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04aVesselMinuteMessageEntity } from './ppv04a_vessel_minute_message.entity';
import { CreatePpv04aVesselMinuteMessageDto } from './dto/create-ppv04a_vessel_minute_message.dto';
import { UpdatePpv04aVesselMinuteMessageDto } from './dto/update-ppv04a_vessel_minute_message.dto';

@Injectable()
export class Ppv04aVesselMinuteMessageService {
  constructor(
    @InjectRepository(Ppv04aVesselMinuteMessageEntity)
    private ppv04aVesselMinuteMessageRepository: Repository<Ppv04aVesselMinuteMessageEntity>,
  ) {}

  findAll(): Promise<Ppv04aVesselMinuteMessageEntity[]> {
    return this.ppv04aVesselMinuteMessageRepository.find();
  }

  async findOne(id: string): Promise<Ppv04aVesselMinuteMessageEntity> {
    const entity = await this.ppv04aVesselMinuteMessageRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04aVesselMinuteMessageEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04aVesselMinuteMessageDto: CreatePpv04aVesselMinuteMessageDto): Promise<Ppv04aVesselMinuteMessageEntity> {
    const entity = this.ppv04aVesselMinuteMessageRepository.create(createPpv04aVesselMinuteMessageDto);
    return this.ppv04aVesselMinuteMessageRepository.save(entity);
  }

  async update(id: string, updatePpv04aVesselMinuteMessageDto: UpdatePpv04aVesselMinuteMessageDto): Promise<Ppv04aVesselMinuteMessageEntity> {
    await this.ppv04aVesselMinuteMessageRepository.update(id, updatePpv04aVesselMinuteMessageDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04aVesselMinuteMessageRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04aVesselMinuteMessageEntity[]> {
    return this.ppv04aVesselMinuteMessageRepository.find({
      where: { application_id: applicationId }
    });
  }
}