import { Controller, Get, Param } from '@nestjs/common';
import { LandingDeclarationService } from './landing-declarations.service';
import { LandingDeclarationEntity } from './landing-declarations.entity';

@Controller('landing-declarations')
export class LandingDeclarationEntityController {
  constructor(private readonly landingDeclarationsService: LandingDeclarationService) {}

  @Get()
  findAll(): Promise<LandingDeclarationEntity[]> {
    return this.landingDeclarationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<LandingDeclarationEntity> {
    return this.landingDeclarationsService.findOne(id);
  }
}

