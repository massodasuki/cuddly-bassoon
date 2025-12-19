import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselApplicationService } from './mppi-vessel-application.service';
import { CreateMppiVesselApplicationDto } from './dto/create-mppi-vessel-application.dto';
import { UpdateMppiVesselApplicationDto } from './dto/update-mppi-vessel-application.dto';

@Controller('mppi_vessel_application')
export class MppiVesselApplicationController {
  constructor(private readonly mppivesselapplicationservice: MppiVesselApplicationService) {}

  @Post()
  create(@Body() createMppiVesselApplicationDto: CreateMppiVesselApplicationDto) {
    return this.mppivesselapplicationservice.create(createMppiVesselApplicationDto);
  }

  @Get()
  findAll() {
    return this.mppivesselapplicationservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivesselapplicationservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivesselapplicationservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselApplicationDto: UpdateMppiVesselApplicationDto) {
    return this.mppivesselapplicationservice.update(id, updateMppiVesselApplicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivesselapplicationservice.remove(id);
  }
}