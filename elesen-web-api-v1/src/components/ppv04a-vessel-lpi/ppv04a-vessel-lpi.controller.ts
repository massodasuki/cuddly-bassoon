import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04aVesselLpiService } from './ppv04a-vessel-lpi.service';
import { CreatePpv04aVesselLpiDto } from './dto/create-ppv04a-vessel-lpi.dto';
import { UpdatePpv04aVesselLpiDto } from './dto/update-ppv04a-vessel-lpi.dto';

@Controller('ppv04a_vessel_lpi')
export class Ppv04aVesselLpiController {
  constructor(private readonly ppv04avessellpiservice: Ppv04aVesselLpiService) {}

  @Post()
  create(@Body() createPpv04aVesselLpiDto: CreatePpv04aVesselLpiDto) {
    return this.ppv04avessellpiservice.create(createPpv04aVesselLpiDto);
  }

  @Get()
  findAll() {
    return this.ppv04avessellpiservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04avessellpiservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04avessellpiservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04aVesselLpiDto: UpdatePpv04aVesselLpiDto) {
    return this.ppv04avessellpiservice.update(id, updatePpv04aVesselLpiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04avessellpiservice.remove(id);
  }
}