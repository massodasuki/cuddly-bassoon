import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LpiFishingEquipmentsService } from './lpi_fishing_equipments.service';
import { CreateLpiFishingEquipmentsDto } from './dto/create-lpi_fishing_equipments.dto';
import { UpdateLpiFishingEquipmentsDto } from './dto/update-lpi_fishing_equipments.dto';

@Controller('lpi_fishing_equipments')
export class LpiFishingEquipmentsController {
  constructor(private readonly lpifishingequipmentsservice: LpiFishingEquipmentsService) {}

  @Post()
  create(@Body() createLpiFishingEquipmentsDto: CreateLpiFishingEquipmentsDto) {
    return this.lpifishingequipmentsservice.create(createLpiFishingEquipmentsDto);
  }

  @Get()
  findAll() {
    return this.lpifishingequipmentsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lpifishingequipmentsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.lpifishingequipmentsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLpiFishingEquipmentsDto: UpdateLpiFishingEquipmentsDto) {
    return this.lpifishingequipmentsservice.update(id, updateLpiFishingEquipmentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lpifishingequipmentsservice.remove(id);
  }
}