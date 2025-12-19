import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LpiInlandFishingEquipmentItemsService } from './lpi_inland_fishing_equipment_items.service';
import { CreateLpiInlandFishingEquipmentItemsDto } from './dto/create-lpi_inland_fishing_equipment_items.dto';
import { UpdateLpiInlandFishingEquipmentItemsDto } from './dto/update-lpi_inland_fishing_equipment_items.dto';

@Controller('lpi_inland_fishing_equipment_items')
export class LpiInlandFishingEquipmentItemsController {
  constructor(private readonly lpiinlandfishingequipmentitemsservice: LpiInlandFishingEquipmentItemsService) {}

  @Post()
  create(@Body() createLpiInlandFishingEquipmentItemsDto: CreateLpiInlandFishingEquipmentItemsDto) {
    return this.lpiinlandfishingequipmentitemsservice.create(createLpiInlandFishingEquipmentItemsDto);
  }

  @Get()
  findAll() {
    return this.lpiinlandfishingequipmentitemsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lpiinlandfishingequipmentitemsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.lpiinlandfishingequipmentitemsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLpiInlandFishingEquipmentItemsDto: UpdateLpiInlandFishingEquipmentItemsDto) {
    return this.lpiinlandfishingequipmentitemsservice.update(id, updateLpiInlandFishingEquipmentItemsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lpiinlandfishingequipmentitemsservice.remove(id);
  }
}