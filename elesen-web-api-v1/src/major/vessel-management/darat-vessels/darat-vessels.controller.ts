import { Controller, Get, Param } from '@nestjs/common';
import { DaratVesselService } from './darat-vessels.service';
import { DaratVesselEntity } from './darat-vessels.entity';

@Controller('darat-vessels')
export class DaratVesselEntityController {
  constructor(private readonly daratVesselsService: DaratVesselService) {}

  @Get()
  findAll(): Promise<DaratVesselEntity[]> {
    return this.daratVesselsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratVesselEntity> {
    return this.daratVesselsService.findOne(id);
  }
}
