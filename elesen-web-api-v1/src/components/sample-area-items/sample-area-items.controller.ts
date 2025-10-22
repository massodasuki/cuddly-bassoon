import { Controller, Get, Param } from '@nestjs/common';
import { SampleAreaItemService } from './sample-area-items.service';
import { SampleAreaItemEntity } from './sample-area-items.entity';

@Controller('sample-area-items')
export class SampleAreaItemEntityController {
  constructor(private readonly sampleAreaItemsService: SampleAreaItemService) {}

  @Get()
  findAll(): Promise<SampleAreaItemEntity[]> {
    return this.sampleAreaItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SampleAreaItemEntity> {
    return this.sampleAreaItemsService.findOne(id);
  }
}
