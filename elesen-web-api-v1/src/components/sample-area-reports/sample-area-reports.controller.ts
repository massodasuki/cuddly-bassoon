import { Controller, Get, Param } from '@nestjs/common';
import { SampleAreaReportService } from './sample-area-reports.service';
import { SampleAreaReportEntity } from './sample-area-reports.entity';

@Controller('sample-area-reports')
export class SampleAreaReportEntityController {
  constructor(private readonly sampleAreaReportsService: SampleAreaReportService) {}

  @Get()
  findAll(): Promise<SampleAreaReportEntity[]> {
    return this.sampleAreaReportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SampleAreaReportEntity> {
    return this.sampleAreaReportsService.findOne(id);
  }
}

