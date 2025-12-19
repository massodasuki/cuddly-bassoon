import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselMinutePostponementService } from './mppi_vessel_minute_postponement.service';
import { CreateMppiVesselMinutePostponementDto } from './dto/create-mppi_vessel_minute_postponement.dto';
import { UpdateMppiVesselMinutePostponementDto } from './dto/update-mppi_vessel_minute_postponement.dto';

@Controller('mppi_vessel_minute_postponement')
export class MppiVesselMinutePostponementController {
  constructor(private readonly mppivesselminutepostponementservice: MppiVesselMinutePostponementService) {}

  @Post()
  create(@Body() createMppiVesselMinutePostponementDto: CreateMppiVesselMinutePostponementDto) {
    return this.mppivesselminutepostponementservice.create(createMppiVesselMinutePostponementDto);
  }

  @Get()
  findAll() {
    return this.mppivesselminutepostponementservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivesselminutepostponementservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivesselminutepostponementservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselMinutePostponementDto: UpdateMppiVesselMinutePostponementDto) {
    return this.mppivesselminutepostponementservice.update(id, updateMppiVesselMinutePostponementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivesselminutepostponementservice.remove(id);
  }
}