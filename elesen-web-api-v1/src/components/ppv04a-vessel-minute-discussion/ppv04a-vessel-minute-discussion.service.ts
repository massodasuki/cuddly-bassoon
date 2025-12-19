import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04aVesselMinuteDiscussionEntity } from './ppv04a-vessel-minute-discussion.entity';
import { CreatePpv04aVesselMinuteDiscussionDto } from './dto/create-ppv04a-vessel-minute-discussion.dto';
import { UpdatePpv04aVesselMinuteDiscussionDto } from './dto/update-ppv04a-vessel-minute-discussion.dto';

@Injectable()
export class Ppv04aVesselMinuteDiscussionService {
  constructor(
    @InjectRepository(Ppv04aVesselMinuteDiscussionEntity)
    private ppv04aVesselMinuteDiscussionRepository: Repository<Ppv04aVesselMinuteDiscussionEntity>,
  ) {}

  findAll(): Promise<Ppv04aVesselMinuteDiscussionEntity[]> {
    return this.ppv04aVesselMinuteDiscussionRepository.find();
  }

  async findOne(id: string): Promise<Ppv04aVesselMinuteDiscussionEntity> {
    const entity = await this.ppv04aVesselMinuteDiscussionRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04aVesselMinuteDiscussionEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04aVesselMinuteDiscussionDto: CreatePpv04aVesselMinuteDiscussionDto): Promise<Ppv04aVesselMinuteDiscussionEntity> {
    const entity = this.ppv04aVesselMinuteDiscussionRepository.create(createPpv04aVesselMinuteDiscussionDto);
    return this.ppv04aVesselMinuteDiscussionRepository.save(entity);
  }

  async update(id: string, updatePpv04aVesselMinuteDiscussionDto: UpdatePpv04aVesselMinuteDiscussionDto): Promise<Ppv04aVesselMinuteDiscussionEntity> {
    await this.ppv04aVesselMinuteDiscussionRepository.update(id, updatePpv04aVesselMinuteDiscussionDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04aVesselMinuteDiscussionRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04aVesselMinuteDiscussionEntity[]> {
    return this.ppv04aVesselMinuteDiscussionRepository.find({
      where: { application_id: applicationId }
    });
  }
}