import { Controller, Get, Param } from '@nestjs/common';
import { DaratVesselEngineService } from './darat-vessel-engines.service';
import { DaratVesselEngineEntity } from './darat-vessel-engines.entity';

@Controller('darat-vessel-engines')
export class DaratVesselEngineEntityController {
  constructor(private readonly daratVesselEnginesService: DaratVesselEngineService) {}

  @Get()
  findAll(): Promise<DaratVesselEngineEntity[]> {
    return this.daratVesselEnginesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratVesselEngineEntity> {
    return this.daratVesselEnginesService.findOne(id);
  }
}
