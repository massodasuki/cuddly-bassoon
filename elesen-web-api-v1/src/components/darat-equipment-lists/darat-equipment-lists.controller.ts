import { Controller, Get, Param } from '@nestjs/common';
import { DaratEquipmentListService } from './darat-equipment-lists.service';
import { DaratEquipmentListEntity } from './darat-equipment-lists.entity';

@Controller('darat-equipment-lists')
export class DaratEquipmentListEntityController {
  constructor(private readonly daratEquipmentListsService: DaratEquipmentListService) {}

  @Get()
  findAll(): Promise<DaratEquipmentListEntity[]> {
    return this.daratEquipmentListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratEquipmentListEntity> {
    return this.daratEquipmentListsService.findOne(id);
  }
}

