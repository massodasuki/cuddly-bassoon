import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LpiSafetyEquipmentsService } from './lpi_safety_equipments.service';
import { CreateLpiSafetyEquipmentsDto } from './dto/create-lpi_safety_equipments.dto';
import { UpdateLpiSafetyEquipmentsDto } from './dto/update-lpi_safety_equipments.dto';

@Controller('lpi_safety_equipments')
export class LpiSafetyEquipmentsController {
  constructor(private readonly lpisafetyequipmentsservice: LpiSafetyEquipmentsService) {}

  @Post()
  create(@Body() createLpiSafetyEquipmentsDto: CreateLpiSafetyEquipmentsDto) {
    return this.lpisafetyequipmentsservice.create(createLpiSafetyEquipmentsDto);
  }

  @Get()
  findAll() {
    return this.lpisafetyequipmentsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lpisafetyequipmentsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.lpisafetyequipmentsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLpiSafetyEquipmentsDto: UpdateLpiSafetyEquipmentsDto) {
    return this.lpisafetyequipmentsservice.update(id, updateLpiSafetyEquipmentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lpisafetyequipmentsservice.remove(id);
  }
}