import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeetingContentsService } from './meeting-contents.service';
import { CreateMeetingContentsDto } from './dto/create-meeting-contents.dto';
import { UpdateMeetingContentsDto } from './dto/update-meeting-contents.dto';

@Controller('meeting_contents')
export class MeetingContentsController {
  constructor(private readonly meetingcontentsservice: MeetingContentsService) {}

  @Post()
  create(@Body() createMeetingContentsDto: CreateMeetingContentsDto) {
    return this.meetingcontentsservice.create(createMeetingContentsDto);
  }

  @Get()
  findAll() {
    return this.meetingcontentsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.meetingcontentsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.meetingcontentsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeetingContentsDto: UpdateMeetingContentsDto) {
    return this.meetingcontentsservice.update(id, updateMeetingContentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meetingcontentsservice.remove(id);
  }
}