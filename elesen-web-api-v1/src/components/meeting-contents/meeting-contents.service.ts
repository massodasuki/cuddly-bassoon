import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MeetingContentsEntity } from './meeting-contents.entity';
import { CreateMeetingContentsDto } from './dto/create-meeting-contents.dto';
import { UpdateMeetingContentsDto } from './dto/update-meeting-contents.dto';

@Injectable()
export class MeetingContentsService {
  constructor(
    @InjectRepository(MeetingContentsEntity)
    private meetingContentsRepository: Repository<MeetingContentsEntity>,
  ) {}

  findAll(): Promise<MeetingContentsEntity[]> {
    return this.meetingContentsRepository.find();
  }

  async findOne(id: string): Promise<MeetingContentsEntity> {
    const entity = await this.meetingContentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MeetingContentsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMeetingContentsDto: CreateMeetingContentsDto): Promise<MeetingContentsEntity> {
    const entity = this.meetingContentsRepository.create(createMeetingContentsDto);
    return this.meetingContentsRepository.save(entity);
  }

  async update(id: string, updateMeetingContentsDto: UpdateMeetingContentsDto): Promise<MeetingContentsEntity> {
    await this.meetingContentsRepository.update(id, updateMeetingContentsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.meetingContentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MeetingContentsEntity[]> {
    return this.meetingContentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}