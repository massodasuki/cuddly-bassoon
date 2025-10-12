import { Controller, Get, Param } from '@nestjs/common';
import { SubsistenceListQuotaHqService } from './subsistence-list-quota-hqs.service';
import { SubsistenceListQuotaHqEntity } from './subsistence-list-quota-hqs.entity';

@Controller('subsistence-list-quota-hqs')
export class SubsistenceListQuotaHqEntityController {
  constructor(private readonly subsistenceListQuotaHqsService: SubsistenceListQuotaHqService) {}

  @Get()
  findAll(): Promise<SubsistenceListQuotaHqEntity[]> {
    return this.subsistenceListQuotaHqsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SubsistenceListQuotaHqEntity> {
    return this.subsistenceListQuotaHqsService.findOne(id);
  }
}
