import { Controller, Get, Param } from '@nestjs/common';
import { DaratHelpAgencyFishermanService } from './darat-help-agency-fishermans.service';
import { DaratHelpAgencyFishermanEntity } from './darat-help-agency-fishermans.entity';

@Controller('darat-help-agency-fishermans')
export class DaratHelpAgencyFishermanEntityController {
  constructor(private readonly daratHelpAgencyFishermansService: DaratHelpAgencyFishermanService) {}

  @Get()
  findAll(): Promise<DaratHelpAgencyFishermanEntity[]> {
    return this.daratHelpAgencyFishermansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratHelpAgencyFishermanEntity> {
    return this.daratHelpAgencyFishermansService.findOne(id);
  }
}

