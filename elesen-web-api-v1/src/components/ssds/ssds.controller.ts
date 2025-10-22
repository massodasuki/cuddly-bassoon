import { Controller, Get, Param } from '@nestjs/common';
import { SsdService } from './ssds.service';
import { SsdEntity } from './ssds.entity';

@Controller('ssds')
export class SsdEntityController {
  constructor(private readonly ssdsService: SsdService) {}

  @Get()
  findAll(): Promise<SsdEntity[]> {
    return this.ssdsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SsdEntity> {
    return this.ssdsService.findOne(id);
  }
}
