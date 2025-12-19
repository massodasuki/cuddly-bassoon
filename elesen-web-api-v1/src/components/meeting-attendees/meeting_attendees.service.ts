import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MeetingAttendeesEntity } from './meeting_attendees.entity';
import { CreateMeetingAttendeesDto } from './dto/create-meeting_attendees.dto';
import { UpdateMeetingAttendeesDto } from './dto/update-meeting_attendees.dto';

@Injectable()
export class MeetingAttendeesService {
  constructor(
    @InjectRepository(MeetingAttendeesEntity)
    private meetingAttendeesRepository: Repository<MeetingAttendeesEntity>,
  ) {}

  findAll(): Promise<MeetingAttendeesEntity[]> {
    return this.meetingAttendeesRepository.find();
  }

  async findOne(id: string): Promise<MeetingAttendeesEntity> {
    const entity = await this.meetingAttendeesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MeetingAttendeesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMeetingAttendeesDto: CreateMeetingAttendeesDto): Promise<MeetingAttendeesEntity> {
    const entity = this.meetingAttendeesRepository.create(createMeetingAttendeesDto);
    return this.meetingAttendeesRepository.save(entity);
  }

  async update(id: string, updateMeetingAttendeesDto: UpdateMeetingAttendeesDto): Promise<MeetingAttendeesEntity> {
    await this.meetingAttendeesRepository.update(id, updateMeetingAttendeesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.meetingAttendeesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MeetingAttendeesEntity[]> {
    return this.meetingAttendeesRepository.find({
      where: { application_id: applicationId }
    });
  }
}