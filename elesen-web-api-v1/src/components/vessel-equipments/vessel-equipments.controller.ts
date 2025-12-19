import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselEquipmentsService } from './vessel-equipments.service';
import { CreateVesselEquipmentsDto } from './dto/create-vessel-equipments.dto';
import { UpdateVesselEquipmentsDto } from './dto/update-vessel-equipments.dto';

@Controller('vessel_equipments')
export class VesselEquipmentsController {
  constructor(private readonly vesselequipmentsservice: VesselEquipmentsService) {}

  @Post()
  create(@Body() createVesselEquipmentsDto: CreateVesselEquipmentsDto) {
    return this.vesselequipmentsservice.create(createVesselEquipmentsDto);
  }

  @Get()
  findAll() {
    return this.vesselequipmentsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vesselequipmentsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vesselequipmentsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselEquipmentsDto: UpdateVesselEquipmentsDto) {
    return this.vesselequipmentsservice.update(id, updateVesselEquipmentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vesselequipmentsservice.remove(id);
  }
}