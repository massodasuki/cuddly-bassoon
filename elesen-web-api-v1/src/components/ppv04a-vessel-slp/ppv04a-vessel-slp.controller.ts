import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04aVesselSlpService } from './ppv04a-vessel-slp.service';
import { CreatePpv04aVesselSlpDto } from './dto/create-ppv04a-vessel-slp.dto';
import { UpdatePpv04aVesselSlpDto } from './dto/update-ppv04a-vessel-slp.dto';

@Controller('ppv04a_vessel_slp')
export class Ppv04aVesselSlpController {
  constructor(private readonly ppv04avesselslpservice: Ppv04aVesselSlpService) {}

  @Post()
  create(@Body() createPpv04aVesselSlpDto: CreatePpv04aVesselSlpDto) {
    return this.ppv04avesselslpservice.create(createPpv04aVesselSlpDto);
  }

  @Get()
  findAll() {
    return this.ppv04avesselslpservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04avesselslpservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04avesselslpservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04aVesselSlpDto: UpdatePpv04aVesselSlpDto) {
    return this.ppv04avesselslpservice.update(id, updatePpv04aVesselSlpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04avesselslpservice.remove(id);
  }
}