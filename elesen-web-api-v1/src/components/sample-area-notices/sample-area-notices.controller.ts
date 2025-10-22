import { Controller, Get, Param } from '@nestjs/common';
import { SampleAreaNoticeService } from './sample-area-notices.service';
import { SampleAreaNoticeEntity } from './sample-area-notices.entity';

@Controller('sample-area-notices')
export class SampleAreaNoticeEntityController {
  constructor(private readonly sampleAreaNoticesService: SampleAreaNoticeService) {}

  @Get()
  findAll(): Promise<SampleAreaNoticeEntity[]> {
    return this.sampleAreaNoticesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SampleAreaNoticeEntity> {
    return this.sampleAreaNoticesService.findOne(id);
  }
}
