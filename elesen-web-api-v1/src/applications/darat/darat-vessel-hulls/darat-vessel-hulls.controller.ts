import { Controller, Get, Param } from '@nestjs/common';
import { DaratVesselHullService } from './darat-vessel-hulls.service';
import { DaratVesselHullEntity } from './darat-vessel-hulls.entity';

@Controller('darat-vessel-hulls')
export class DaratVesselHullEntityController {
  constructor(private readonly daratVesselHullsService: DaratVesselHullService) {}

  @Get()
  findAll(): Promise<DaratVesselHullEntity[]> {
    return this.daratVesselHullsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratVesselHullEntity> {
    return this.daratVesselHullsService.findOne(id);
  }
}
