import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04aVesselKickoffService } from './ppv04a_vessel_kickoff.service';
import { CreatePpv04aVesselKickoffDto } from './dto/create-ppv04a_vessel_kickoff.dto';
import { UpdatePpv04aVesselKickoffDto } from './dto/update-ppv04a_vessel_kickoff.dto';

@Controller('ppv04a_vessel_kickoff')
export class Ppv04aVesselKickoffController {
  constructor(private readonly ppv04avesselkickoffservice: Ppv04aVesselKickoffService) {}

  @Post()
  create(@Body() createPpv04aVesselKickoffDto: CreatePpv04aVesselKickoffDto) {
    return this.ppv04avesselkickoffservice.create(createPpv04aVesselKickoffDto);
  }

  @Get()
  findAll() {
    return this.ppv04avesselkickoffservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04avesselkickoffservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04avesselkickoffservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04aVesselKickoffDto: UpdatePpv04aVesselKickoffDto) {
    return this.ppv04avesselkickoffservice.update(id, updatePpv04aVesselKickoffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04avesselkickoffservice.remove(id);
  }
}