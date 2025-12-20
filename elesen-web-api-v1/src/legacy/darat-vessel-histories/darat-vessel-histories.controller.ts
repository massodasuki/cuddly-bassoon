import { Controller, Get, Param } from '@nestjs/common';
import { DaratVesselHistorieService } from './darat-vessel-histories.service';
import { DaratVesselHistorieEntity } from './darat-vessel-histories.entity';

@Controller('darat-vessel-histories')
export class DaratVesselHistorieEntityController {
  constructor(private readonly daratVesselHistoriesService: DaratVesselHistorieService) {}

  @Get()
  findAll(): Promise<DaratVesselHistorieEntity[]> {
    return this.daratVesselHistoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratVesselHistorieEntity> {
    return this.daratVesselHistoriesService.findOne(id);
  }
}

