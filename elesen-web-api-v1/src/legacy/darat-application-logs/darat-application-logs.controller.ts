import { Controller, Get, Param } from '@nestjs/common';
import { DaratApplicationLogService } from './darat-application-logs.service';
import { DaratApplicationLogEntity } from './darat-application-logs.entity';

@Controller('darat-application-logs')
export class DaratApplicationLogEntityController {
  constructor(private readonly daratApplicationLogsService: DaratApplicationLogService) {}

  @Get()
  findAll(): Promise<DaratApplicationLogEntity[]> {
    return this.daratApplicationLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratApplicationLogEntity> {
    return this.daratApplicationLogsService.findOne(id);
  }
}

