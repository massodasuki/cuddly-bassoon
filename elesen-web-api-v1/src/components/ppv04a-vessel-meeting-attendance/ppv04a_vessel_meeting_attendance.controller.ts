import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04aVesselMeetingAttendanceService } from './ppv04a_vessel_meeting_attendance.service';
import { CreatePpv04aVesselMeetingAttendanceDto } from './dto/create-ppv04a_vessel_meeting_attendance.dto';
import { UpdatePpv04aVesselMeetingAttendanceDto } from './dto/update-ppv04a_vessel_meeting_attendance.dto';

@Controller('ppv04a_vessel_meeting_attendance')
export class Ppv04aVesselMeetingAttendanceController {
  constructor(private readonly ppv04avesselmeetingattendanceservice: Ppv04aVesselMeetingAttendanceService) {}

  @Post()
  create(@Body() createPpv04aVesselMeetingAttendanceDto: CreatePpv04aVesselMeetingAttendanceDto) {
    return this.ppv04avesselmeetingattendanceservice.create(createPpv04aVesselMeetingAttendanceDto);
  }

  @Get()
  findAll() {
    return this.ppv04avesselmeetingattendanceservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04avesselmeetingattendanceservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04avesselmeetingattendanceservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04aVesselMeetingAttendanceDto: UpdatePpv04aVesselMeetingAttendanceDto) {
    return this.ppv04avesselmeetingattendanceservice.update(id, updatePpv04aVesselMeetingAttendanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04avesselmeetingattendanceservice.remove(id);
  }
}