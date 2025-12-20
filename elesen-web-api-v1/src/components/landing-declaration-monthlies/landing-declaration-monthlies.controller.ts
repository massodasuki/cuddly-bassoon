import { Controller, Get, Param } from '@nestjs/common';
import { LandingDeclarationMonthlieService } from './landing-declaration-monthlies.service';
import { LandingDeclarationMonthlieEntity } from './landing-declaration-monthlies.entity';

@Controller('landing-declaration-monthlies')
export class LandingDeclarationMonthlieEntityController {
  constructor(private readonly landingDeclarationMonthliesService: LandingDeclarationMonthlieService) {}

  @Get()
  findAll(): Promise<LandingDeclarationMonthlieEntity[]> {
    return this.landingDeclarationMonthliesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<LandingDeclarationMonthlieEntity> {
    return this.landingDeclarationMonthliesService.findOne(id);
  }
}

