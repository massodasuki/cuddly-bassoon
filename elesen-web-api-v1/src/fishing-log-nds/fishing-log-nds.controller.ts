import { Controller, Get, Param } from '@nestjs/common';
import { FishingLogNdService } from './fishing-log-nds.service';
import { FishingLogNdEntity } from './fishing-log-nds.entity';

@Controller('fishing-log-nds')
export class FishingLogNdEntityController {
  constructor(private readonly fishingLogNdsService: FishingLogNdService) {}

  @Get()
  findAll(): Promise<FishingLogNdEntity[]> {
    return this.fishingLogNdsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<FishingLogNdEntity> {
    return this.fishingLogNdsService.findOne(id);
  }
}
