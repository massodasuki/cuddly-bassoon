import { Controller, Get, Param } from '@nestjs/common';
import { DaratUserEquipmentService } from './darat-user-equipments.service';
import { DaratUserEquipmentEntity } from './darat-user-equipments.entity';

@Controller('darat-user-equipments')
export class DaratUserEquipmentEntityController {
  constructor(private readonly daratUserEquipmentsService: DaratUserEquipmentService) {}

  @Get()
  findAll(): Promise<DaratUserEquipmentEntity[]> {
    return this.daratUserEquipmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratUserEquipmentEntity> {
    return this.daratUserEquipmentsService.findOne(id);
  }
}

