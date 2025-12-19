import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04aVesselExtraFileService } from './ppv04a_vessel_extra_file.service';
import { CreatePpv04aVesselExtraFileDto } from './dto/create-ppv04a_vessel_extra_file.dto';
import { UpdatePpv04aVesselExtraFileDto } from './dto/update-ppv04a_vessel_extra_file.dto';

@Controller('ppv04a_vessel_extra_file')
export class Ppv04aVesselExtraFileController {
  constructor(private readonly ppv04avesselextrafileservice: Ppv04aVesselExtraFileService) {}

  @Post()
  create(@Body() createPpv04aVesselExtraFileDto: CreatePpv04aVesselExtraFileDto) {
    return this.ppv04avesselextrafileservice.create(createPpv04aVesselExtraFileDto);
  }

  @Get()
  findAll() {
    return this.ppv04avesselextrafileservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04avesselextrafileservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04avesselextrafileservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04aVesselExtraFileDto: UpdatePpv04aVesselExtraFileDto) {
    return this.ppv04avesselextrafileservice.update(id, updatePpv04aVesselExtraFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04avesselextrafileservice.remove(id);
  }
}