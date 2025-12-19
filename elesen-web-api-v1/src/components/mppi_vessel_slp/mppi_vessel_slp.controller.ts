import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselSlpService } from './mppi_vessel_slp.service';
import { CreateMppiVesselSlpDto } from './dto/create-mppi_vessel_slp.dto';
import { UpdateMppiVesselSlpDto } from './dto/update-mppi_vessel_slp.dto';

@Controller('mppi_vessel_slp')
export class MppiVesselSlpController {
  constructor(private readonly mppivesselslpservice: MppiVesselSlpService) {}

  @Post()
  create(@Body() createMppiVesselSlpDto: CreateMppiVesselSlpDto) {
    return this.mppivesselslpservice.create(createMppiVesselSlpDto);
  }

  @Get()
  findAll() {
    return this.mppivesselslpservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivesselslpservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivesselslpservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselSlpDto: UpdateMppiVesselSlpDto) {
    return this.mppivesselslpservice.update(id, updateMppiVesselSlpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivesselslpservice.remove(id);
  }
}