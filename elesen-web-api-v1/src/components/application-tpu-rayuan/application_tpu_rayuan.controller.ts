import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationTpuRayuanService } from './application_tpu_rayuan.service';
import { CreateApplicationTpuRayuanDto } from './dto/create-application_tpu_rayuan.dto';
import { UpdateApplicationTpuRayuanDto } from './dto/update-application_tpu_rayuan.dto';

@Controller('application_tpu_rayuan')
export class ApplicationTpuRayuanController {
  constructor(private readonly applicationtpurayuanservice: ApplicationTpuRayuanService) {}

  @Post()
  create(@Body() createApplicationTpuRayuanDto: CreateApplicationTpuRayuanDto) {
    return this.applicationtpurayuanservice.create(createApplicationTpuRayuanDto);
  }

  @Get()
  findAll() {
    return this.applicationtpurayuanservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationtpurayuanservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationtpurayuanservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationTpuRayuanDto: UpdateApplicationTpuRayuanDto) {
    return this.applicationtpurayuanservice.update(id, updateApplicationTpuRayuanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationtpurayuanservice.remove(id);
  }
}