import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselLogService } from './mppi-vessel-log.service';
import { CreateMppiVesselLogDto } from './dto/create-mppi-vessel-log.dto';
import { UpdateMppiVesselLogDto } from './dto/update-mppi-vessel-log.dto';

@Controller('mppi_vessel_log')
export class MppiVesselLogController {
  constructor(private readonly mppivessellogservice: MppiVesselLogService) {}

  @Post()
  create(@Body() createMppiVesselLogDto: CreateMppiVesselLogDto) {
    return this.mppivessellogservice.create(createMppiVesselLogDto);
  }

  @Get()
  findAll() {
    return this.mppivessellogservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivessellogservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivessellogservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselLogDto: UpdateMppiVesselLogDto) {
    return this.mppivessellogservice.update(id, updateMppiVesselLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivessellogservice.remove(id);
  }
}