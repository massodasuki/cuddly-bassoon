import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeetingsService } from './meetings.service';
import { CreateMeetingsDto } from './dto/create-meetings.dto';
import { UpdateMeetingsDto } from './dto/update-meetings.dto';

@Controller('meetings')
export class MeetingsController {
  constructor(private readonly meetingsservice: MeetingsService) {}

  @Post()
  create(@Body() createMeetingsDto: CreateMeetingsDto) {
    return this.meetingsservice.create(createMeetingsDto);
  }

  @Get()
  findAll() {
    return this.meetingsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.meetingsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.meetingsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeetingsDto: UpdateMeetingsDto) {
    return this.meetingsservice.update(id, updateMeetingsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meetingsservice.remove(id);
  }
}