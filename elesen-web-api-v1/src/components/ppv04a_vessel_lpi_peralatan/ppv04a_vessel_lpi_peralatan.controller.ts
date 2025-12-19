import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04aVesselLpiPeralatanService } from './ppv04a_vessel_lpi_peralatan.service';
import { CreatePpv04aVesselLpiPeralatanDto } from './dto/create-ppv04a_vessel_lpi_peralatan.dto';
import { UpdatePpv04aVesselLpiPeralatanDto } from './dto/update-ppv04a_vessel_lpi_peralatan.dto';

@Controller('ppv04a_vessel_lpi_peralatan')
export class Ppv04aVesselLpiPeralatanController {
  constructor(private readonly ppv04avessellpiperalatanservice: Ppv04aVesselLpiPeralatanService) {}

  @Post()
  create(@Body() createPpv04aVesselLpiPeralatanDto: CreatePpv04aVesselLpiPeralatanDto) {
    return this.ppv04avessellpiperalatanservice.create(createPpv04aVesselLpiPeralatanDto);
  }

  @Get()
  findAll() {
    return this.ppv04avessellpiperalatanservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04avessellpiperalatanservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04avessellpiperalatanservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04aVesselLpiPeralatanDto: UpdatePpv04aVesselLpiPeralatanDto) {
    return this.ppv04avessellpiperalatanservice.update(id, updatePpv04aVesselLpiPeralatanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04avessellpiperalatanservice.remove(id);
  }
}