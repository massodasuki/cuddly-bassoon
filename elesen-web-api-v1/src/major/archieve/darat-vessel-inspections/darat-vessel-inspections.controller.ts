import { Controller, Get, Param } from '@nestjs/common';
import { DaratVesselInspectionService } from './darat-vessel-inspections.service';
import { DaratVesselInspectionEntity } from './darat-vessel-inspections.entity';

@Controller('darat-vessel-inspections')
export class DaratVesselInspectionEntityController {
  constructor(private readonly daratVesselInspectionsService: DaratVesselInspectionService) {}

  @Get()
  findAll(): Promise<DaratVesselInspectionEntity[]> {
    return this.daratVesselInspectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratVesselInspectionEntity> {
    return this.daratVesselInspectionsService.findOne(id);
  }
}
