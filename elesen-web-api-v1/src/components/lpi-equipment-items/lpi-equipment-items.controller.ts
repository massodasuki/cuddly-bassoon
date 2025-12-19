import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LpiEquipmentItemsService } from './lpi-equipment-items.service';
import { CreateLpiEquipmentItemsDto } from './dto/create-lpi-equipment-items.dto';
import { UpdateLpiEquipmentItemsDto } from './dto/update-lpi-equipment-items.dto';

@Controller('lpi_equipment_items')
export class LpiEquipmentItemsController {
  constructor(private readonly lpiequipmentitemsservice: LpiEquipmentItemsService) {}

  @Post()
  create(@Body() createLpiEquipmentItemsDto: CreateLpiEquipmentItemsDto) {
    return this.lpiequipmentitemsservice.create(createLpiEquipmentItemsDto);
  }

  @Get()
  findAll() {
    return this.lpiequipmentitemsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lpiequipmentitemsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.lpiequipmentitemsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLpiEquipmentItemsDto: UpdateLpiEquipmentItemsDto) {
    return this.lpiequipmentitemsservice.update(id, updateLpiEquipmentItemsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lpiequipmentitemsservice.remove(id);
  }
}