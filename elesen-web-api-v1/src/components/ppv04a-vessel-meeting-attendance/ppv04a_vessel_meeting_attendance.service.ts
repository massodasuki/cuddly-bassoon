import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04aVesselMeetingAttendanceEntity } from './ppv04a_vessel_meeting_attendance.entity';
import { CreatePpv04aVesselMeetingAttendanceDto } from './dto/create-ppv04a_vessel_meeting_attendance.dto';
import { UpdatePpv04aVesselMeetingAttendanceDto } from './dto/update-ppv04a_vessel_meeting_attendance.dto';

@Injectable()
export class Ppv04aVesselMeetingAttendanceService {
  constructor(
    @InjectRepository(Ppv04aVesselMeetingAttendanceEntity)
    private ppv04aVesselMeetingAttendanceRepository: Repository<Ppv04aVesselMeetingAttendanceEntity>,
  ) {}

  findAll(): Promise<Ppv04aVesselMeetingAttendanceEntity[]> {
    return this.ppv04aVesselMeetingAttendanceRepository.find();
  }

  async findOne(id: string): Promise<Ppv04aVesselMeetingAttendanceEntity> {
    const entity = await this.ppv04aVesselMeetingAttendanceRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04aVesselMeetingAttendanceEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04aVesselMeetingAttendanceDto: CreatePpv04aVesselMeetingAttendanceDto): Promise<Ppv04aVesselMeetingAttendanceEntity> {
    const entity = this.ppv04aVesselMeetingAttendanceRepository.create(createPpv04aVesselMeetingAttendanceDto);
    return this.ppv04aVesselMeetingAttendanceRepository.save(entity);
  }

  async update(id: string, updatePpv04aVesselMeetingAttendanceDto: UpdatePpv04aVesselMeetingAttendanceDto): Promise<Ppv04aVesselMeetingAttendanceEntity> {
    await this.ppv04aVesselMeetingAttendanceRepository.update(id, updatePpv04aVesselMeetingAttendanceDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04aVesselMeetingAttendanceRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04aVesselMeetingAttendanceEntity[]> {
    return this.ppv04aVesselMeetingAttendanceRepository.find({
      where: { application_id: applicationId }
    });
  }
}