import { Controller, Get, Param } from '@nestjs/common';
import { VesselService } from './vessels.service';
import { VesselEntity } from './vessels.entity';

@Controller('vessels')
export class VesselEntityController {
  constructor(private readonly vesselsService: VesselService) {}

  @Get()
  findAll(): Promise<VesselEntity[]> {
    return this.vesselsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<VesselEntity> {
    return this.vesselsService.findOne(id);
  }
}

