import { Controller, Get, Param } from '@nestjs/common';
import { FailedJobService } from './failed-jobs.service';
import { FailedJobEntity } from './failed-jobs.entity';

@Controller('failed-jobs')
export class FailedJobEntityController {
  constructor(private readonly failedJobsService: FailedJobService) {}

  @Get()
  findAll(): Promise<FailedJobEntity[]> {
    return this.failedJobsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<FailedJobEntity> {
    return this.failedJobsService.findOne(id);
  }
}
