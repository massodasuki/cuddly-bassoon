import { Controller, Get, Param } from '@nestjs/common';
import { SubsistenceApplicationEntityervice } from './subsistence-application.service';
import { SubsistenceApplicationEntity } from './subsistence-application.entity';

@Controller('subsistence-application')
export class SubsistenceApplicationEntityController {
  constructor(private readonly subsistenceApplicationService: SubsistenceApplicationEntityervice) {}

  @Get()
  findAll(): Promise<SubsistenceApplicationEntity[]> {
    return this.subsistenceApplicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SubsistenceApplicationEntity> {
    return this.subsistenceApplicationService.findOne(id);
  }
}
