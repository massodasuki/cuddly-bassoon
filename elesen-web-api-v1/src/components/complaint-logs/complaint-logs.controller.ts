import { Controller, Get, Param } from '@nestjs/common';
import { ComplaintLogService } from './complaint-logs.service';
import { ComplaintLogEntity } from './complaint-logs.entity';

@Controller('complaint-logs')
export class ComplaintLogEntityController {
  constructor(private readonly complaintLogsService: ComplaintLogService) {}

  @Get()
  findAll(): Promise<ComplaintLogEntity[]> {
    return this.complaintLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ComplaintLogEntity | null> {
    return this.complaintLogsService.findOne(id);
  }
}

