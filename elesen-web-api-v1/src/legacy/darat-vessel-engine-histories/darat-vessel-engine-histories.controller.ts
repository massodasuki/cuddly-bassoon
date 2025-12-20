import { Controller, Get, Param } from '@nestjs/common';
import { DaratVesselEngineHistorieService } from './darat-vessel-engine-histories.service';
import { DaratVesselEngineHistorieEntity } from './darat-vessel-engine-histories.entity';

@Controller('darat-vessel-engine-histories')
export class DaratVesselEngineHistorieEntityController {
  constructor(private readonly daratVesselEngineHistoriesService: DaratVesselEngineHistorieService) {}

  @Get()
  findAll(): Promise<DaratVesselEngineHistorieEntity[]> {
    return this.daratVesselEngineHistoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratVesselEngineHistorieEntity> {
    return this.daratVesselEngineHistoriesService.findOne(id);
  }
}

