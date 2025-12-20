import { Controller, Get, Param } from '@nestjs/common';
import { LandingInfoActivitieService } from './landing-info-activities.service';
import { LandingInfoActivitieEntity } from './landing-info-activities.entity';

@Controller('landing-info-activities')
export class LandingInfoActivitieEntityController {
  constructor(private readonly landingInfoActivitiesService: LandingInfoActivitieService) {}

  @Get()
  findAll(): Promise<LandingInfoActivitieEntity[]> {
    return this.landingInfoActivitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<LandingInfoActivitieEntity> {
    return this.landingInfoActivitiesService.findOne(id);
  }
}

