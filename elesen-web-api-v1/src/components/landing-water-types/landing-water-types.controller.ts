import { Controller, Get, Param } from '@nestjs/common';
import { LandingWaterTypeService } from './landing-water-types.service';
import { LandingWaterTypeEntity } from './landing-water-types.entity';

@Controller('landing-water-types')
export class LandingWaterTypeEntityController {
  constructor(private readonly landingWaterTypesService: LandingWaterTypeService) {}

  @Get()
  findAll(): Promise<LandingWaterTypeEntity[]> {
    return this.landingWaterTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<LandingWaterTypeEntity> {
    return this.landingWaterTypesService.findOne(id);
  }
}

