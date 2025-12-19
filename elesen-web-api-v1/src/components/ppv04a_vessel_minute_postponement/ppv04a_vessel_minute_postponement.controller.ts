import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04aVesselMinutePostponementService } from './ppv04a_vessel_minute_postponement.service';
import { CreatePpv04aVesselMinutePostponementDto } from './dto/create-ppv04a_vessel_minute_postponement.dto';
import { UpdatePpv04aVesselMinutePostponementDto } from './dto/update-ppv04a_vessel_minute_postponement.dto';

@Controller('ppv04a_vessel_minute_postponement')
export class Ppv04aVesselMinutePostponementController {
  constructor(private readonly ppv04avesselminutepostponementservice: Ppv04aVesselMinutePostponementService) {}

  @Post()
  create(@Body() createPpv04aVesselMinutePostponementDto: CreatePpv04aVesselMinutePostponementDto) {
    return this.ppv04avesselminutepostponementservice.create(createPpv04aVesselMinutePostponementDto);
  }

  @Get()
  findAll() {
    return this.ppv04avesselminutepostponementservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04avesselminutepostponementservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04avesselminutepostponementservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04aVesselMinutePostponementDto: UpdatePpv04aVesselMinutePostponementDto) {
    return this.ppv04avesselminutepostponementservice.update(id, updatePpv04aVesselMinutePostponementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04avesselminutepostponementservice.remove(id);
  }
}