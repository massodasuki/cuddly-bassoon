import { Controller, Get, Param } from '@nestjs/common';
import { LandingActivityTypeService } from './landing-activity-types.service';
import { LandingActivityTypeEntity } from './landing-activity-types.entity';

@Controller('landing-activity-types')
export class LandingActivityTypeEntityController {
  constructor(private readonly landingActivityTypesService: LandingActivityTypeService) {}

  @Get()
  findAll(): Promise<LandingActivityTypeEntity[]> {
    return this.landingActivityTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<LandingActivityTypeEntity> {
    return this.landingActivityTypesService.findOne(id);
  }
}

