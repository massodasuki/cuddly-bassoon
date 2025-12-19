import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselKickoffService } from './mppi_vessel_kickoff.service';
import { CreateMppiVesselKickoffDto } from './dto/create-mppi_vessel_kickoff.dto';
import { UpdateMppiVesselKickoffDto } from './dto/update-mppi_vessel_kickoff.dto';

@Controller('mppi_vessel_kickoff')
export class MppiVesselKickoffController {
  constructor(private readonly mppivesselkickoffservice: MppiVesselKickoffService) {}

  @Post()
  create(@Body() createMppiVesselKickoffDto: CreateMppiVesselKickoffDto) {
    return this.mppivesselkickoffservice.create(createMppiVesselKickoffDto);
  }

  @Get()
  findAll() {
    return this.mppivesselkickoffservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivesselkickoffservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivesselkickoffservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselKickoffDto: UpdateMppiVesselKickoffDto) {
    return this.mppivesselkickoffservice.update(id, updateMppiVesselKickoffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivesselkickoffservice.remove(id);
  }
}