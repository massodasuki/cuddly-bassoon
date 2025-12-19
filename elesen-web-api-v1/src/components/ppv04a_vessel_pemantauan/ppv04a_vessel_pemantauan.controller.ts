import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04aVesselPemantauanService } from './ppv04a_vessel_pemantauan.service';
import { CreatePpv04aVesselPemantauanDto } from './dto/create-ppv04a_vessel_pemantauan.dto';
import { UpdatePpv04aVesselPemantauanDto } from './dto/update-ppv04a_vessel_pemantauan.dto';

@Controller('ppv04a_vessel_pemantauan')
export class Ppv04aVesselPemantauanController {
  constructor(private readonly ppv04avesselpemantauanservice: Ppv04aVesselPemantauanService) {}

  @Post()
  create(@Body() createPpv04aVesselPemantauanDto: CreatePpv04aVesselPemantauanDto) {
    return this.ppv04avesselpemantauanservice.create(createPpv04aVesselPemantauanDto);
  }

  @Get()
  findAll() {
    return this.ppv04avesselpemantauanservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04avesselpemantauanservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04avesselpemantauanservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04aVesselPemantauanDto: UpdatePpv04aVesselPemantauanDto) {
    return this.ppv04avesselpemantauanservice.update(id, updatePpv04aVesselPemantauanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04avesselpemantauanservice.remove(id);
  }
}