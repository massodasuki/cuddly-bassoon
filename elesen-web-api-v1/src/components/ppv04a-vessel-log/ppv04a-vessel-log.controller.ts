import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04aVesselLogService } from './ppv04a-vessel-log.service';
import { CreatePpv04aVesselLogDto } from './dto/create-ppv04a-vessel-log.dto';
import { UpdatePpv04aVesselLogDto } from './dto/update-ppv04a-vessel-log.dto';

@Controller('ppv04a_vessel_log')
export class Ppv04aVesselLogController {
  constructor(private readonly ppv04avessellogservice: Ppv04aVesselLogService) {}

  @Post()
  create(@Body() createPpv04aVesselLogDto: CreatePpv04aVesselLogDto) {
    return this.ppv04avessellogservice.create(createPpv04aVesselLogDto);
  }

  @Get()
  findAll() {
    return this.ppv04avessellogservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04avessellogservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04avessellogservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04aVesselLogDto: UpdatePpv04aVesselLogDto) {
    return this.ppv04avessellogservice.update(id, updatePpv04aVesselLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04avessellogservice.remove(id);
  }
}