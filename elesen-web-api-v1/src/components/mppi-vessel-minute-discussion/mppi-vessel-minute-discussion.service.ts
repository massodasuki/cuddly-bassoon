import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselMinuteDiscussionEntity } from './mppi-vessel-minute-discussion.entity';
import { CreateMppiVesselMinuteDiscussionDto } from './dto/create-mppi-vessel-minute-discussion.dto';
import { UpdateMppiVesselMinuteDiscussionDto } from './dto/update-mppi-vessel-minute-discussion.dto';

@Injectable()
export class MppiVesselMinuteDiscussionService {
  constructor(
    @InjectRepository(MppiVesselMinuteDiscussionEntity)
    private mppiVesselMinuteDiscussionRepository: Repository<MppiVesselMinuteDiscussionEntity>,
  ) {}

  findAll(): Promise<MppiVesselMinuteDiscussionEntity[]> {
    return this.mppiVesselMinuteDiscussionRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselMinuteDiscussionEntity> {
    const entity = await this.mppiVesselMinuteDiscussionRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselMinuteDiscussionEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselMinuteDiscussionDto: CreateMppiVesselMinuteDiscussionDto): Promise<MppiVesselMinuteDiscussionEntity> {
    const entity = this.mppiVesselMinuteDiscussionRepository.create(createMppiVesselMinuteDiscussionDto);
    return this.mppiVesselMinuteDiscussionRepository.save(entity);
  }

  async update(id: string, updateMppiVesselMinuteDiscussionDto: UpdateMppiVesselMinuteDiscussionDto): Promise<MppiVesselMinuteDiscussionEntity> {
    await this.mppiVesselMinuteDiscussionRepository.update(id, updateMppiVesselMinuteDiscussionDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselMinuteDiscussionRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselMinuteDiscussionEntity[]> {
    return this.mppiVesselMinuteDiscussionRepository.find({
      where: { application_id: applicationId }
    });
  }
}