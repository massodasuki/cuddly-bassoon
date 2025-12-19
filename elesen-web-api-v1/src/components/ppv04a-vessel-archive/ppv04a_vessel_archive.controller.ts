import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04aVesselArchiveService } from './ppv04a_vessel_archive.service';
import { CreatePpv04aVesselArchiveDto } from './dto/create-ppv04a_vessel_archive.dto';
import { UpdatePpv04aVesselArchiveDto } from './dto/update-ppv04a_vessel_archive.dto';

@Controller('ppv04a_vessel_archive')
export class Ppv04aVesselArchiveController {
  constructor(private readonly ppv04avesselarchiveservice: Ppv04aVesselArchiveService) {}

  @Post()
  create(@Body() createPpv04aVesselArchiveDto: CreatePpv04aVesselArchiveDto) {
    return this.ppv04avesselarchiveservice.create(createPpv04aVesselArchiveDto);
  }

  @Get()
  findAll() {
    return this.ppv04avesselarchiveservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04avesselarchiveservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04avesselarchiveservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04aVesselArchiveDto: UpdatePpv04aVesselArchiveDto) {
    return this.ppv04avesselarchiveservice.update(id, updatePpv04aVesselArchiveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04avesselarchiveservice.remove(id);
  }
}