import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LpiEquipmentsService } from './lpi-equipments.service';
import { CreateLpiEquipmentsDto } from './dto/create-lpi-equipments.dto';
import { UpdateLpiEquipmentsDto } from './dto/update-lpi-equipments.dto';

@Controller('lpi_equipments')
export class LpiEquipmentsController {
  constructor(private readonly lpiequipmentsservice: LpiEquipmentsService) {}

  @Post()
  create(@Body() createLpiEquipmentsDto: CreateLpiEquipmentsDto) {
    return this.lpiequipmentsservice.create(createLpiEquipmentsDto);
  }

  @Get()
  findAll() {
    return this.lpiequipmentsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lpiequipmentsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.lpiequipmentsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLpiEquipmentsDto: UpdateLpiEquipmentsDto) {
    return this.lpiequipmentsservice.update(id, updateLpiEquipmentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lpiequipmentsservice.remove(id);
  }
}