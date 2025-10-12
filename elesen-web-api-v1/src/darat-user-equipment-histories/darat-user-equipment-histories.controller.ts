import { Controller, Get, Param } from '@nestjs/common';
import { DaratUserEquipmentHistorieService } from './darat-user-equipment-histories.service';
import { DaratUserEquipmentHistorieEntity } from './darat-user-equipment-histories.entity';

@Controller('darat-user-equipment-histories')
export class DaratUserEquipmentHistorieEntityController {
  constructor(private readonly daratUserEquipmentHistoriesService: DaratUserEquipmentHistorieService) {}

  @Get()
  findAll(): Promise<DaratUserEquipmentHistorieEntity[]> {
    return this.daratUserEquipmentHistoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratUserEquipmentHistorieEntity> {
    return this.daratUserEquipmentHistoriesService.findOne(id);
  }
}
