import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselExtraFileService } from './mppi-vessel-extra-file.service';
import { CreateMppiVesselExtraFileDto } from './dto/create-mppi-vessel-extra-file.dto';
import { UpdateMppiVesselExtraFileDto } from './dto/update-mppi-vessel-extra-file.dto';

@Controller('mppi_vessel_extra_file')
export class MppiVesselExtraFileController {
  constructor(private readonly mppivesselextrafileservice: MppiVesselExtraFileService) {}

  @Post()
  create(@Body() createMppiVesselExtraFileDto: CreateMppiVesselExtraFileDto) {
    return this.mppivesselextrafileservice.create(createMppiVesselExtraFileDto);
  }

  @Get()
  findAll() {
    return this.mppivesselextrafileservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivesselextrafileservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivesselextrafileservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselExtraFileDto: UpdateMppiVesselExtraFileDto) {
    return this.mppivesselextrafileservice.update(id, updateMppiVesselExtraFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivesselextrafileservice.remove(id);
  }
}