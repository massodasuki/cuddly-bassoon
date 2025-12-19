import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationLegaciesService } from './application-legacies.service';
import { CreateApplicationLegaciesDto } from './dto/create-application-legacies.dto';
import { UpdateApplicationLegaciesDto } from './dto/update-application-legacies.dto';

@Controller('application_legacies')
export class ApplicationLegaciesController {
  constructor(private readonly applicationlegaciesservice: ApplicationLegaciesService) {}

  @Post()
  create(@Body() createApplicationLegaciesDto: CreateApplicationLegaciesDto) {
    return this.applicationlegaciesservice.create(createApplicationLegaciesDto);
  }

  @Get()
  findAll() {
    return this.applicationlegaciesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationlegaciesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationlegaciesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationLegaciesDto: UpdateApplicationLegaciesDto) {
    return this.applicationlegaciesservice.update(id, updateApplicationLegaciesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationlegaciesservice.remove(id);
  }
}