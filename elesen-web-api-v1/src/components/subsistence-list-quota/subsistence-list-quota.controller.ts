import { Controller, Get, Param } from '@nestjs/common';
import { SubsistenceListQuotaEntityervice } from './subsistence-list-quota.service';
import { SubsistenceListQuotaEntity } from './subsistence-list-quota.entity';

@Controller('subsistence-list-quota')
export class SubsistenceListQuotaEntityController {
  constructor(private readonly subsistenceListQuotaService: SubsistenceListQuotaEntityervice) {}

  @Get()
  findAll(): Promise<SubsistenceListQuotaEntity[]> {
    return this.subsistenceListQuotaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SubsistenceListQuotaEntity> {
    return this.subsistenceListQuotaService.findOne(id);
  }
}
