import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LpiInlandFishingEquipmentsService } from './lpi_inland_fishing_equipments.service';
import { CreateLpiInlandFishingEquipmentsDto } from './dto/create-lpi_inland_fishing_equipments.dto';
import { UpdateLpiInlandFishingEquipmentsDto } from './dto/update-lpi_inland_fishing_equipments.dto';

@Controller('lpi_inland_fishing_equipments')
export class LpiInlandFishingEquipmentsController {
  constructor(private readonly lpiinlandfishingequipmentsservice: LpiInlandFishingEquipmentsService) {}

  @Post()
  create(@Body() createLpiInlandFishingEquipmentsDto: CreateLpiInlandFishingEquipmentsDto) {
    return this.lpiinlandfishingequipmentsservice.create(createLpiInlandFishingEquipmentsDto);
  }

  @Get()
  findAll() {
    return this.lpiinlandfishingequipmentsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lpiinlandfishingequipmentsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.lpiinlandfishingequipmentsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLpiInlandFishingEquipmentsDto: UpdateLpiInlandFishingEquipmentsDto) {
    return this.lpiinlandfishingequipmentsservice.update(id, updateLpiInlandFishingEquipmentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lpiinlandfishingequipmentsservice.remove(id);
  }
}