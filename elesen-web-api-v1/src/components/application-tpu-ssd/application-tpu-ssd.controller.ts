import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationTpuSsdService } from './application-tpu-ssd.service';
import { CreateApplicationTpuSsdDto } from './dto/create-application-tpu-ssd.dto';
import { UpdateApplicationTpuSsdDto } from './dto/update-application-tpu-ssd.dto';

@Controller('application_tpu_ssd')
export class ApplicationTpuSsdController {
  constructor(private readonly applicationtpussdservice: ApplicationTpuSsdService) {}

  @Post()
  create(@Body() createApplicationTpuSsdDto: CreateApplicationTpuSsdDto) {
    return this.applicationtpussdservice.create(createApplicationTpuSsdDto);
  }

  @Get()
  findAll() {
    return this.applicationtpussdservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationtpussdservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationtpussdservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationTpuSsdDto: UpdateApplicationTpuSsdDto) {
    return this.applicationtpussdservice.update(id, updateApplicationTpuSsdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationtpussdservice.remove(id);
  }
}