import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseParticipantsService } from './course_participants.service';
import { CreateCourseParticipantsDto } from './dto/create-course_participants.dto';
import { UpdateCourseParticipantsDto } from './dto/update-course_participants.dto';

@Controller('course_participants')
export class CourseParticipantsController {
  constructor(private readonly courseparticipantsservice: CourseParticipantsService) {}

  @Post()
  create(@Body() createCourseParticipantsDto: CreateCourseParticipantsDto) {
    return this.courseparticipantsservice.create(createCourseParticipantsDto);
  }

  @Get()
  findAll() {
    return this.courseparticipantsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseparticipantsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.courseparticipantsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseParticipantsDto: UpdateCourseParticipantsDto) {
    return this.courseparticipantsservice.update(id, updateCourseParticipantsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseparticipantsservice.remove(id);
  }
}