import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LpiSailingEquipmentsService } from './lpi-sailing-equipments.service';
import { CreateLpiSailingEquipmentsDto } from './dto/create-lpi-sailing-equipments.dto';
import { UpdateLpiSailingEquipmentsDto } from './dto/update-lpi-sailing-equipments.dto';

@Controller('lpi_sailing_equipments')
export class LpiSailingEquipmentsController {
  constructor(private readonly lpisailingequipmentsservice: LpiSailingEquipmentsService) {}

  @Post()
  create(@Body() createLpiSailingEquipmentsDto: CreateLpiSailingEquipmentsDto) {
    return this.lpisailingequipmentsservice.create(createLpiSailingEquipmentsDto);
  }

  @Get()
  findAll() {
    return this.lpisailingequipmentsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lpisailingequipmentsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.lpisailingequipmentsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLpiSailingEquipmentsDto: UpdateLpiSailingEquipmentsDto) {
    return this.lpisailingequipmentsservice.update(id, updateLpiSailingEquipmentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lpisailingequipmentsservice.remove(id);
  }
}