import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MeetingsEntity } from './meetings.entity';
import { CreateMeetingsDto } from './dto/create-meetings.dto';
import { UpdateMeetingsDto } from './dto/update-meetings.dto';

@Injectable()
export class MeetingsService {
  constructor(
    @InjectRepository(MeetingsEntity)
    private meetingsRepository: Repository<MeetingsEntity>,
  ) {}

  findAll(): Promise<MeetingsEntity[]> {
    return this.meetingsRepository.find();
  }

  async findOne(id: string): Promise<MeetingsEntity> {
    const entity = await this.meetingsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MeetingsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMeetingsDto: CreateMeetingsDto): Promise<MeetingsEntity> {
    const entity = this.meetingsRepository.create(createMeetingsDto);
    return this.meetingsRepository.save(entity);
  }

  async update(id: string, updateMeetingsDto: UpdateMeetingsDto): Promise<MeetingsEntity> {
    await this.meetingsRepository.update(id, updateMeetingsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.meetingsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MeetingsEntity[]> {
    return this.meetingsRepository.find({
      where: { application_id: applicationId }
    });
  }
}