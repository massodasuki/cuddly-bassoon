import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselLpiPeralatanService } from './mppi-vessel-lpi-peralatan.service';
import { CreateMppiVesselLpiPeralatanDto } from './dto/create-mppi-vessel-lpi-peralatan.dto';
import { UpdateMppiVesselLpiPeralatanDto } from './dto/update-mppi-vessel-lpi-peralatan.dto';

@Controller('mppi_vessel_lpi_peralatan')
export class MppiVesselLpiPeralatanController {
  constructor(private readonly mppivessellpiperalatanservice: MppiVesselLpiPeralatanService) {}

  @Post()
  create(@Body() createMppiVesselLpiPeralatanDto: CreateMppiVesselLpiPeralatanDto) {
    return this.mppivessellpiperalatanservice.create(createMppiVesselLpiPeralatanDto);
  }

  @Get()
  findAll() {
    return this.mppivessellpiperalatanservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivessellpiperalatanservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivessellpiperalatanservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselLpiPeralatanDto: UpdateMppiVesselLpiPeralatanDto) {
    return this.mppivessellpiperalatanservice.update(id, updateMppiVesselLpiPeralatanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivessellpiperalatanservice.remove(id);
  }
}