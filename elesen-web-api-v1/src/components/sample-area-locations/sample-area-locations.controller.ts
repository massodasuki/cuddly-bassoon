import { Controller, Get, Param } from '@nestjs/common';
import { SampleAreaLocationService } from './sample-area-locations.service';
import { SampleAreaLocationEntity } from './sample-area-locations.entity';

@Controller('sample-area-locations')
export class SampleAreaLocationEntityController {
  constructor(private readonly sampleAreaLocationsService: SampleAreaLocationService) {}

  @Get()
  findAll(): Promise<SampleAreaLocationEntity[]> {
    return this.sampleAreaLocationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SampleAreaLocationEntity> {
    return this.sampleAreaLocationsService.findOne(id);
  }
}

