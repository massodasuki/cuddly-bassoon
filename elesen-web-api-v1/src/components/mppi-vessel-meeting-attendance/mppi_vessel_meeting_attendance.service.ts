import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselMeetingAttendanceEntity } from './mppi_vessel_meeting_attendance.entity';
import { CreateMppiVesselMeetingAttendanceDto } from './dto/create-mppi_vessel_meeting_attendance.dto';
import { UpdateMppiVesselMeetingAttendanceDto } from './dto/update-mppi_vessel_meeting_attendance.dto';

@Injectable()
export class MppiVesselMeetingAttendanceService {
  constructor(
    @InjectRepository(MppiVesselMeetingAttendanceEntity)
    private mppiVesselMeetingAttendanceRepository: Repository<MppiVesselMeetingAttendanceEntity>,
  ) {}

  findAll(): Promise<MppiVesselMeetingAttendanceEntity[]> {
    return this.mppiVesselMeetingAttendanceRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselMeetingAttendanceEntity> {
    const entity = await this.mppiVesselMeetingAttendanceRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselMeetingAttendanceEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselMeetingAttendanceDto: CreateMppiVesselMeetingAttendanceDto): Promise<MppiVesselMeetingAttendanceEntity> {
    const entity = this.mppiVesselMeetingAttendanceRepository.create(createMppiVesselMeetingAttendanceDto);
    return this.mppiVesselMeetingAttendanceRepository.save(entity);
  }

  async update(id: string, updateMppiVesselMeetingAttendanceDto: UpdateMppiVesselMeetingAttendanceDto): Promise<MppiVesselMeetingAttendanceEntity> {
    await this.mppiVesselMeetingAttendanceRepository.update(id, updateMppiVesselMeetingAttendanceDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselMeetingAttendanceRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselMeetingAttendanceEntity[]> {
    return this.mppiVesselMeetingAttendanceRepository.find({
      where: { application_id: applicationId }
    });
  }
}