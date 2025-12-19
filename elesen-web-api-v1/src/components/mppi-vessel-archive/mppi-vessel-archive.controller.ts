import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselArchiveService } from './mppi-vessel-archive.service';
import { CreateMppiVesselArchiveDto } from './dto/create-mppi-vessel-archive.dto';
import { UpdateMppiVesselArchiveDto } from './dto/update-mppi-vessel-archive.dto';

@Controller('mppi_vessel_archive')
export class MppiVesselArchiveController {
  constructor(private readonly mppivesselarchiveservice: MppiVesselArchiveService) {}

  @Post()
  create(@Body() createMppiVesselArchiveDto: CreateMppiVesselArchiveDto) {
    return this.mppivesselarchiveservice.create(createMppiVesselArchiveDto);
  }

  @Get()
  findAll() {
    return this.mppivesselarchiveservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivesselarchiveservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivesselarchiveservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselArchiveDto: UpdateMppiVesselArchiveDto) {
    return this.mppivesselarchiveservice.update(id, updateMppiVesselArchiveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivesselarchiveservice.remove(id);
  }
}