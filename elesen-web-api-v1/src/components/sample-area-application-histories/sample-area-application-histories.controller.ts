import { Controller, Get, Param } from '@nestjs/common';
import { SampleAreaApplicationHistorieService } from './sample-area-application-histories.service';
import { SampleAreaApplicationHistorieEntity } from './sample-area-application-histories.entity';

@Controller('sample-area-application-histories')
export class SampleAreaApplicationHistorieEntityController {
  constructor(private readonly sampleAreaApplicationHistoriesService: SampleAreaApplicationHistorieService) {}

  @Get()
  findAll(): Promise<SampleAreaApplicationHistorieEntity[]> {
    return this.sampleAreaApplicationHistoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SampleAreaApplicationHistorieEntity> {
    return this.sampleAreaApplicationHistoriesService.findOne(id);
  }
}

