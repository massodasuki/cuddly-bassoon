import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselLpiService } from './mppi_vessel_lpi.service';
import { CreateMppiVesselLpiDto } from './dto/create-mppi_vessel_lpi.dto';
import { UpdateMppiVesselLpiDto } from './dto/update-mppi_vessel_lpi.dto';

@Controller('mppi_vessel_lpi')
export class MppiVesselLpiController {
  constructor(private readonly mppivessellpiservice: MppiVesselLpiService) {}

  @Post()
  create(@Body() createMppiVesselLpiDto: CreateMppiVesselLpiDto) {
    return this.mppivessellpiservice.create(createMppiVesselLpiDto);
  }

  @Get()
  findAll() {
    return this.mppivessellpiservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivessellpiservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivessellpiservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselLpiDto: UpdateMppiVesselLpiDto) {
    return this.mppivessellpiservice.update(id, updateMppiVesselLpiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivessellpiservice.remove(id);
  }
}