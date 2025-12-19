import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselViolationsService } from './vessel-violations.service';
import { CreateVesselViolationsDto } from './dto/create-vessel-violations.dto';
import { UpdateVesselViolationsDto } from './dto/update-vessel-violations.dto';

@Controller('vessel_violations')
export class VesselViolationsController {
  constructor(private readonly vesselviolationsservice: VesselViolationsService) {}

  @Post()
  create(@Body() createVesselViolationsDto: CreateVesselViolationsDto) {
    return this.vesselviolationsservice.create(createVesselViolationsDto);
  }

  @Get()
  findAll() {
    return this.vesselviolationsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vesselviolationsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vesselviolationsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselViolationsDto: UpdateVesselViolationsDto) {
    return this.vesselviolationsservice.update(id, updateVesselViolationsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vesselviolationsservice.remove(id);
  }
}