import { Controller, Get, Param } from '@nestjs/common';
import { DaratInspectionEquipmentService } from './darat-inspection-equipments.service';
import { DaratInspectionEquipmentEntity } from './darat-inspection-equipments.entity';

@Controller('darat-inspection-equipments')
export class DaratInspectionEquipmentEntityController {
  constructor(private readonly daratInspectionEquipmentsService: DaratInspectionEquipmentService) {}

  @Get()
  findAll(): Promise<DaratInspectionEquipmentEntity[]> {
    return this.daratInspectionEquipmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratInspectionEquipmentEntity> {
    return this.daratInspectionEquipmentsService.findOne(id);
  }
}
