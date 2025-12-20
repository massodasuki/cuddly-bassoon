import { Controller, Get, Param } from '@nestjs/common';
import { FishSpeciesNdService } from './fish-species-nds.service';
import { FishSpeciesNdEntity } from './fish-species-nds.entity';

@Controller('fish-species-nds')
export class FishSpeciesNdEntityController {
  constructor(private readonly fishSpeciesNdsService: FishSpeciesNdService) {}

  @Get()
  findAll(): Promise<FishSpeciesNdEntity[]> {
    return this.fishSpeciesNdsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<FishSpeciesNdEntity> {
    return this.fishSpeciesNdsService.findOne(id);
  }
}

