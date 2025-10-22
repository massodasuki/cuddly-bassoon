import { Controller, Get, Param } from '@nestjs/common';
import { LandingDeclareMonthlyLogService } from './landing-declare-monthly-logs.service';
import { LandingDeclareMonthlyLogEntity } from './landing-declare-monthly-logs.entity';

@Controller('landing-declare-monthly-logs')
export class LandingDeclareMonthlyLogEntityController {
  constructor(private readonly landingDeclareMonthlyLogsService: LandingDeclareMonthlyLogService) {}

  @Get()
  findAll(): Promise<LandingDeclareMonthlyLogEntity[]> {
    return this.landingDeclareMonthlyLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<LandingDeclareMonthlyLogEntity> {
    return this.landingDeclareMonthlyLogsService.findOne(id);
  }
}
