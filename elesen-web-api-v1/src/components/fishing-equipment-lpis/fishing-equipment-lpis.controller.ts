import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FishingEquipmentLpisService } from './fishing-equipment-lpis.service';
import { CreateFishingEquipmentLpisDto } from './dto/create-fishing-equipment-lpis.dto';
import { UpdateFishingEquipmentLpisDto } from './dto/update-fishing-equipment-lpis.dto';

@Controller('fishing_equipment_lpis')
export class FishingEquipmentLpisController {
  constructor(private readonly fishingequipmentlpisservice: FishingEquipmentLpisService) {}

  @Post()
  create(@Body() createFishingEquipmentLpisDto: CreateFishingEquipmentLpisDto) {
    return this.fishingequipmentlpisservice.create(createFishingEquipmentLpisDto);
  }

  @Get()
  findAll() {
    return this.fishingequipmentlpisservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fishingequipmentlpisservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.fishingequipmentlpisservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFishingEquipmentLpisDto: UpdateFishingEquipmentLpisDto) {
    return this.fishingequipmentlpisservice.update(id, updateFishingEquipmentLpisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fishingequipmentlpisservice.remove(id);
  }
}