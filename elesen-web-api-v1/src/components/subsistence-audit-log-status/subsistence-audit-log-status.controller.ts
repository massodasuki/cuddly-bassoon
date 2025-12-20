import { Controller, Get, Param } from '@nestjs/common';
import { SubsistenceAuditLogStatuService } from './subsistence-audit-log-status.service';
import { SubsistenceAuditLogStatuEntity } from './subsistence-audit-log-status.entity';

@Controller('subsistence-audit-log-status')
export class SubsistenceAuditLogStatuEntityController {
  constructor(private readonly subsistenceAuditLogStatusService: SubsistenceAuditLogStatuService) {}

  @Get()
  findAll(): Promise<SubsistenceAuditLogStatuEntity[]> {
    return this.subsistenceAuditLogStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SubsistenceAuditLogStatuEntity> {
    return this.subsistenceAuditLogStatusService.findOne(id);
  }
}

