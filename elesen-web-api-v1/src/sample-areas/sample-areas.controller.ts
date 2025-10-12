import { Controller, Get, Param } from '@nestjs/common';
import { SampleAreaService } from './sample-areas.service';
import { SampleAreaEntity } from './sample-areas.entity';

@Controller('sample-areas')
export class SampleAreaEntityController {
  constructor(private readonly sampleAreasService: SampleAreaService) {}

  @Get()
  findAll(): Promise<SampleAreaEntity[]> {
    return this.sampleAreasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SampleAreaEntity> {
    return this.sampleAreasService.findOne(id);
  }
}
