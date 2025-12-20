import { Controller, Get, Param } from '@nestjs/common';
import { FishCatchNdService } from './fish-catch-nds.service';
import { FishCatchNdEntity } from './fish-catch-nds.entity';

@Controller('fish-catch-nds')
export class FishCatchNdEntityController {
  constructor(private readonly fishCatchNdsService: FishCatchNdService) {}

  @Get()
  findAll(): Promise<FishCatchNdEntity[]> {
    return this.fishCatchNdsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<FishCatchNdEntity> {
    return this.fishCatchNdsService.findOne(id);
  }
}

