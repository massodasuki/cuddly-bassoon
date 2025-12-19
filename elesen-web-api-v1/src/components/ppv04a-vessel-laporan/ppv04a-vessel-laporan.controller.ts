import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04aVesselLaporanService } from './ppv04a-vessel-laporan.service';
import { CreatePpv04aVesselLaporanDto } from './dto/create-ppv04a-vessel-laporan.dto';
import { UpdatePpv04aVesselLaporanDto } from './dto/update-ppv04a-vessel-laporan.dto';

@Controller('ppv04a_vessel_laporan')
export class Ppv04aVesselLaporanController {
  constructor(private readonly ppv04avessellaporanservice: Ppv04aVesselLaporanService) {}

  @Post()
  create(@Body() createPpv04aVesselLaporanDto: CreatePpv04aVesselLaporanDto) {
    return this.ppv04avessellaporanservice.create(createPpv04aVesselLaporanDto);
  }

  @Get()
  findAll() {
    return this.ppv04avessellaporanservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04avessellaporanservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04avessellaporanservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04aVesselLaporanDto: UpdatePpv04aVesselLaporanDto) {
    return this.ppv04avessellaporanservice.update(id, updatePpv04aVesselLaporanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04avessellaporanservice.remove(id);
  }
}