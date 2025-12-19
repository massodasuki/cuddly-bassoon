import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselMeetingAttendanceService } from './mppi_vessel_meeting_attendance.service';
import { CreateMppiVesselMeetingAttendanceDto } from './dto/create-mppi_vessel_meeting_attendance.dto';
import { UpdateMppiVesselMeetingAttendanceDto } from './dto/update-mppi_vessel_meeting_attendance.dto';

@Controller('mppi_vessel_meeting_attendance')
export class MppiVesselMeetingAttendanceController {
  constructor(private readonly mppivesselmeetingattendanceservice: MppiVesselMeetingAttendanceService) {}

  @Post()
  create(@Body() createMppiVesselMeetingAttendanceDto: CreateMppiVesselMeetingAttendanceDto) {
    return this.mppivesselmeetingattendanceservice.create(createMppiVesselMeetingAttendanceDto);
  }

  @Get()
  findAll() {
    return this.mppivesselmeetingattendanceservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivesselmeetingattendanceservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivesselmeetingattendanceservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselMeetingAttendanceDto: UpdateMppiVesselMeetingAttendanceDto) {
    return this.mppivesselmeetingattendanceservice.update(id, updateMppiVesselMeetingAttendanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivesselmeetingattendanceservice.remove(id);
  }
}