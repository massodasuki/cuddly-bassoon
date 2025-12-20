import { Controller, Get, Param } from '@nestjs/common';
import { KruApplicationLogService } from './kru-application-logs.service';
import { KruApplicationLogEntity } from './kru-application-logs.entity';

@Controller('kru-application-logs')
export class KruApplicationLogEntityController {
  constructor(private readonly kruApplicationLogsService: KruApplicationLogService) {}

  @Get()
  findAll(): Promise<KruApplicationLogEntity[]> {
    return this.kruApplicationLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<KruApplicationLogEntity> {
    return this.kruApplicationLogsService.findOne(id);
  }
}

