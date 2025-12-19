import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselMeetingInvitationEntity } from './mppi_vessel_meeting_invitation.entity';
import { CreateMppiVesselMeetingInvitationDto } from './dto/create-mppi_vessel_meeting_invitation.dto';
import { UpdateMppiVesselMeetingInvitationDto } from './dto/update-mppi_vessel_meeting_invitation.dto';

@Injectable()
export class MppiVesselMeetingInvitationService {
  constructor(
    @InjectRepository(MppiVesselMeetingInvitationEntity)
    private mppiVesselMeetingInvitationRepository: Repository<MppiVesselMeetingInvitationEntity>,
  ) {}

  findAll(): Promise<MppiVesselMeetingInvitationEntity[]> {
    return this.mppiVesselMeetingInvitationRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselMeetingInvitationEntity> {
    const entity = await this.mppiVesselMeetingInvitationRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselMeetingInvitationEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselMeetingInvitationDto: CreateMppiVesselMeetingInvitationDto): Promise<MppiVesselMeetingInvitationEntity> {
    const entity = this.mppiVesselMeetingInvitationRepository.create(createMppiVesselMeetingInvitationDto);
    return this.mppiVesselMeetingInvitationRepository.save(entity);
  }

  async update(id: string, updateMppiVesselMeetingInvitationDto: UpdateMppiVesselMeetingInvitationDto): Promise<MppiVesselMeetingInvitationEntity> {
    await this.mppiVesselMeetingInvitationRepository.update(id, updateMppiVesselMeetingInvitationDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselMeetingInvitationRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselMeetingInvitationEntity[]> {
    return this.mppiVesselMeetingInvitationRepository.find({
      where: { application_id: applicationId }
    });
  }
}