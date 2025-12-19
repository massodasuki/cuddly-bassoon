import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselLaporanService } from './mppi-vessel-laporan.service';
import { CreateMppiVesselLaporanDto } from './dto/create-mppi-vessel-laporan.dto';
import { UpdateMppiVesselLaporanDto } from './dto/update-mppi-vessel-laporan.dto';

@Controller('mppi_vessel_laporan')
export class MppiVesselLaporanController {
  constructor(private readonly mppivessellaporanservice: MppiVesselLaporanService) {}

  @Post()
  create(@Body() createMppiVesselLaporanDto: CreateMppiVesselLaporanDto) {
    return this.mppivessellaporanservice.create(createMppiVesselLaporanDto);
  }

  @Get()
  findAll() {
    return this.mppivessellaporanservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivessellaporanservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivessellaporanservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselLaporanDto: UpdateMppiVesselLaporanDto) {
    return this.mppivessellaporanservice.update(id, updateMppiVesselLaporanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivessellaporanservice.remove(id);
  }
}