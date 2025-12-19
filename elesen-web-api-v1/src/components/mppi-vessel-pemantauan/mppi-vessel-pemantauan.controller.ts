import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselPemantauanService } from './mppi-vessel-pemantauan.service';
import { CreateMppiVesselPemantauanDto } from './dto/create-mppi-vessel-pemantauan.dto';
import { UpdateMppiVesselPemantauanDto } from './dto/update-mppi-vessel-pemantauan.dto';

@Controller('mppi_vessel_pemantauan')
export class MppiVesselPemantauanController {
  constructor(private readonly mppivesselpemantauanservice: MppiVesselPemantauanService) {}

  @Post()
  create(@Body() createMppiVesselPemantauanDto: CreateMppiVesselPemantauanDto) {
    return this.mppivesselpemantauanservice.create(createMppiVesselPemantauanDto);
  }

  @Get()
  findAll() {
    return this.mppivesselpemantauanservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivesselpemantauanservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivesselpemantauanservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselPemantauanDto: UpdateMppiVesselPemantauanDto) {
    return this.mppivesselpemantauanservice.update(id, updateMppiVesselPemantauanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivesselpemantauanservice.remove(id);
  }
}