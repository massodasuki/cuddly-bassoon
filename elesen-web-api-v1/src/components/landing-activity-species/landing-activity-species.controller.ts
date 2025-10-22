import { Controller, Get, Param } from '@nestjs/common';
import { LandingActivitySpecieService } from './landing-activity-species.service';
import { LandingActivitySpecieEntity } from './landing-activity-species.entity';

@Controller('landing-activity-species')
export class LandingActivitySpecieEntityController {
  constructor(private readonly landingActivitySpeciesService: LandingActivitySpecieService) {}

  @Get()
  findAll(): Promise<LandingActivitySpecieEntity[]> {
    return this.landingActivitySpeciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<LandingActivitySpecieEntity> {
    return this.landingActivitySpeciesService.findOne(id);
  }
}
