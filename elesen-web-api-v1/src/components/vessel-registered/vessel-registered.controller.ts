import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselRegisteredService } from './vessel-registered.service';
import { CreateVesselRegisteredDto } from './dto/create-vessel-registered.dto';
import { UpdateVesselRegisteredDto } from './dto/update-vessel-registered.dto';

@Controller('vessel_registered')
export class VesselRegisteredController {
  constructor(private readonly vesselregisteredservice: VesselRegisteredService) {}

  @Post()
  create(@Body() createVesselRegisteredDto: CreateVesselRegisteredDto) {
    return this.vesselregisteredservice.create(createVesselRegisteredDto);
  }

  @Get()
  findAll() {
    return this.vesselregisteredservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vesselregisteredservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vesselregisteredservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselRegisteredDto: UpdateVesselRegisteredDto) {
    return this.vesselregisteredservice.update(id, updateVesselRegisteredDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vesselregisteredservice.remove(id);
  }
}