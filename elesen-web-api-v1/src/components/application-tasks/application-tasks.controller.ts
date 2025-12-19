import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationTasksService } from './application-tasks.service';
import { CreateApplicationTasksDto } from './dto/create-application-tasks.dto';
import { UpdateApplicationTasksDto } from './dto/update-application-tasks.dto';

@Controller('application_tasks')
export class ApplicationTasksController {
  constructor(private readonly applicationtasksservice: ApplicationTasksService) {}

  @Post()
  create(@Body() createApplicationTasksDto: CreateApplicationTasksDto) {
    return this.applicationtasksservice.create(createApplicationTasksDto);
  }

  @Get()
  findAll() {
    return this.applicationtasksservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationtasksservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationtasksservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationTasksDto: UpdateApplicationTasksDto) {
    return this.applicationtasksservice.update(id, updateApplicationTasksDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationtasksservice.remove(id);
  }
}