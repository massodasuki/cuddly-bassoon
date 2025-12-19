import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeetingAttendeesService } from './meeting-attendees.service';
import { CreateMeetingAttendeesDto } from './dto/create-meeting-attendees.dto';
import { UpdateMeetingAttendeesDto } from './dto/update-meeting-attendees.dto';

@Controller('meeting_attendees')
export class MeetingAttendeesController {
  constructor(private readonly meetingattendeesservice: MeetingAttendeesService) {}

  @Post()
  create(@Body() createMeetingAttendeesDto: CreateMeetingAttendeesDto) {
    return this.meetingattendeesservice.create(createMeetingAttendeesDto);
  }

  @Get()
  findAll() {
    return this.meetingattendeesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.meetingattendeesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.meetingattendeesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeetingAttendeesDto: UpdateMeetingAttendeesDto) {
    return this.meetingattendeesservice.update(id, updateMeetingAttendeesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meetingattendeesservice.remove(id);
  }
}