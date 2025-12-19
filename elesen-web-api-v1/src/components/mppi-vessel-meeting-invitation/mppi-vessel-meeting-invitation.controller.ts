import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselMeetingInvitationService } from './mppi-vessel-meeting-invitation.service';
import { CreateMppiVesselMeetingInvitationDto } from './dto/create-mppi-vessel-meeting-invitation.dto';
import { UpdateMppiVesselMeetingInvitationDto } from './dto/update-mppi-vessel-meeting-invitation.dto';

@Controller('mppi_vessel_meeting_invitation')
export class MppiVesselMeetingInvitationController {
  constructor(private readonly mppivesselmeetinginvitationservice: MppiVesselMeetingInvitationService) {}

  @Post()
  create(@Body() createMppiVesselMeetingInvitationDto: CreateMppiVesselMeetingInvitationDto) {
    return this.mppivesselmeetinginvitationservice.create(createMppiVesselMeetingInvitationDto);
  }

  @Get()
  findAll() {
    return this.mppivesselmeetinginvitationservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivesselmeetinginvitationservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivesselmeetinginvitationservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselMeetingInvitationDto: UpdateMppiVesselMeetingInvitationDto) {
    return this.mppivesselmeetinginvitationservice.update(id, updateMppiVesselMeetingInvitationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivesselmeetinginvitationservice.remove(id);
  }
}