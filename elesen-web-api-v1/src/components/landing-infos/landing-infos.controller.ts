import { Controller, Get, Param } from '@nestjs/common';
import { LandingInfoService } from './landing-infos.service';
import { LandingInfoEntity } from './landing-infos.entity';

@Controller('landing-infos')
export class LandingInfoEntityController {
  constructor(private readonly landingInfosService: LandingInfoService) {}

  @Get()
  findAll(): Promise<LandingInfoEntity[]> {
    return this.landingInfosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<LandingInfoEntity> {
    return this.landingInfosService.findOne(id);
  }
}
