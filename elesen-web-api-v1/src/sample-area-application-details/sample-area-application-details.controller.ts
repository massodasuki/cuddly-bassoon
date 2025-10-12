import { Controller, Get, Param } from '@nestjs/common';
import { SampleAreaApplicationDetailService } from './sample-area-application-details.service';
import { SampleAreaApplicationDetailEntity } from './sample-area-application-details.entity';

@Controller('sample-area-application-details')
export class SampleAreaApplicationDetailEntityController {
  constructor(private readonly sampleAreaApplicationDetailsService: SampleAreaApplicationDetailService) {}

  @Get()
  findAll(): Promise<SampleAreaApplicationDetailEntity[]> {
    return this.sampleAreaApplicationDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SampleAreaApplicationDetailEntity> {
    return this.sampleAreaApplicationDetailsService.findOne(id);
  }
}
