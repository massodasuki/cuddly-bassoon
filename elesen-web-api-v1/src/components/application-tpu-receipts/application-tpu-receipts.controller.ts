import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationTpuReceiptsService } from './application-tpu-receipts.service';
import { CreateApplicationTpuReceiptsDto } from './dto/create-application-tpu-receipts.dto';
import { UpdateApplicationTpuReceiptsDto } from './dto/update-application-tpu-receipts.dto';

@Controller('application_tpu_receipts')
export class ApplicationTpuReceiptsController {
  constructor(private readonly applicationtpureceiptsservice: ApplicationTpuReceiptsService) {}

  @Post()
  create(@Body() createApplicationTpuReceiptsDto: CreateApplicationTpuReceiptsDto) {
    return this.applicationtpureceiptsservice.create(createApplicationTpuReceiptsDto);
  }

  @Get()
  findAll() {
    return this.applicationtpureceiptsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationtpureceiptsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationtpureceiptsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationTpuReceiptsDto: UpdateApplicationTpuReceiptsDto) {
    return this.applicationtpureceiptsservice.update(id, updateApplicationTpuReceiptsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationtpureceiptsservice.remove(id);
  }
}