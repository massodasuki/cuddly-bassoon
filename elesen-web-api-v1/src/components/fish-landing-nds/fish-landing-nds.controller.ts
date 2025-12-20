import { Controller, Get, Param } from '@nestjs/common';
import { FishLandingNdService } from './fish-landing-nds.service';
import { FishLandingNdEntity } from './fish-landing-nds.entity';

@Controller('fish-landing-nds')
export class FishLandingNdEntityController {
  constructor(private readonly fishLandingNdsService: FishLandingNdService) {}

  @Get()
  findAll(): Promise<FishLandingNdEntity[]> {
    return this.fishLandingNdsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<FishLandingNdEntity> {
    return this.fishLandingNdsService.findOne(id);
  }
}

