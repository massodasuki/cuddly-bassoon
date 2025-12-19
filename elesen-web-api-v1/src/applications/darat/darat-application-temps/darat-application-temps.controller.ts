import { Controller, Get, Param } from '@nestjs/common';
import { DaratApplicationTempService } from './darat-application-temps.service';
import { DaratApplicationTempEntity } from './darat-application-temps.entity';

@Controller('darat-application-temps')
export class DaratApplicationTempEntityController {
  constructor(private readonly daratApplicationTempsService: DaratApplicationTempService) {}

  @Get()
  findAll(): Promise<DaratApplicationTempEntity[]> {
    return this.daratApplicationTempsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratApplicationTempEntity> {
    return this.daratApplicationTempsService.findOne(id);
  }
}
