import { Controller, Get, Param } from '@nestjs/common';
import { LandingDeclarationLogService } from './landing-declaration-logs.service';
import { LandingDeclarationLogEntity } from './landing-declaration-logs.entity';

@Controller('landing-declaration-logs')
export class LandingDeclarationLogEntityController {
  constructor(private readonly landingDeclarationLogsService: LandingDeclarationLogService) {}

  @Get()
  findAll(): Promise<LandingDeclarationLogEntity[]> {
    return this.landingDeclarationLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<LandingDeclarationLogEntity> {
    return this.landingDeclarationLogsService.findOne(id);
  }
}

