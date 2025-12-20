import { Controller, Get, Param } from '@nestjs/common';
import { SampleAreaHistorieService } from './sample-area-histories.service';
import { SampleAreaHistorieEntity } from './sample-area-histories.entity';

@Controller('sample-area-histories')
export class SampleAreaHistorieEntityController {
  constructor(private readonly sampleAreaHistoriesService: SampleAreaHistorieService) {}

  @Get()
  findAll(): Promise<SampleAreaHistorieEntity[]> {
    return this.sampleAreaHistoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SampleAreaHistorieEntity> {
    return this.sampleAreaHistoriesService.findOne(id);
  }
}

