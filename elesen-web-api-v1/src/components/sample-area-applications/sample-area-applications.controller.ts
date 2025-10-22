import { Controller, Get, Param } from '@nestjs/common';
import { SampleAreaApplicationService } from './sample-area-applications.service';
import { SampleAreaApplicationEntity } from './sample-area-applications.entity';

@Controller('sample-area-applications')
export class SampleAreaApplicationEntityController {
  constructor(private readonly sampleAreaApplicationsService: SampleAreaApplicationService) {}

  @Get()
  findAll(): Promise<SampleAreaApplicationEntity[]> {
    return this.sampleAreaApplicationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SampleAreaApplicationEntity> {
    return this.sampleAreaApplicationsService.findOne(id);
  }
}
