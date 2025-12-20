import { Controller, Get, Param } from '@nestjs/common';
import { DaratVesselHullHistorieService } from './darat-vessel-hull-histories.service';
import { DaratVesselHullHistorieEntity } from './darat-vessel-hull-histories.entity';

@Controller('darat-vessel-hull-histories')
export class DaratVesselHullHistorieEntityController {
  constructor(private readonly daratVesselHullHistoriesService: DaratVesselHullHistorieService) {}

  @Get()
  findAll(): Promise<DaratVesselHullHistorieEntity[]> {
    return this.daratVesselHullHistoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratVesselHullHistorieEntity> {
    return this.daratVesselHullHistoriesService.findOne(id);
  }
}

