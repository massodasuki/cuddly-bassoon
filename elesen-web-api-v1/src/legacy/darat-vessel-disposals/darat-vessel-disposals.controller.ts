import { Controller, Get, Param } from '@nestjs/common';
import { DaratVesselDisposalService } from './darat-vessel-disposals.service';
import { DaratVesselDisposalEntity } from './darat-vessel-disposals.entity';

@Controller('darat-vessel-disposals')
export class DaratVesselDisposalEntityController {
  constructor(private readonly daratVesselDisposalsService: DaratVesselDisposalService) {}

  @Get()
  findAll(): Promise<DaratVesselDisposalEntity[]> {
    return this.daratVesselDisposalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratVesselDisposalEntity> {
    return this.daratVesselDisposalsService.findOne(id);
  }
}

