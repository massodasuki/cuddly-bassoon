import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CmEquipmentService } from './cm-equipment.service';
import { CreateCmEquipmentDto } from './dto/create-cm-equipment.dto';
import { UpdateCmEquipmentDto } from './dto/update-cm-equipment.dto';

@Controller('cm-equipment')
export class CmEquipmentController {
  constructor(private readonly cmEquipmentService: CmEquipmentService) {}

  @Post()
  create(@Body() createCmEquipmentDto: CreateCmEquipmentDto) {
    return this.cmEquipmentService.create(createCmEquipmentDto);
  }

  @Get()
  findAll() {
    return this.cmEquipmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cmEquipmentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCmEquipmentDto: UpdateCmEquipmentDto) {
    return this.cmEquipmentService.update(id, updateCmEquipmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cmEquipmentService.remove(id);
  }
}