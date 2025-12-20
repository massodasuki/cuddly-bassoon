import { Controller, Get, Param } from '@nestjs/common';
import { DaratBaseJettieService } from './darat-base-jetties.service';
import { DaratBaseJettieEntity } from './darat-base-jetties.entity';

@Controller('darat-base-jetties')
export class DaratBaseJettieEntityController {
  constructor(private readonly daratBaseJettiesService: DaratBaseJettieService) {}

  @Get()
  findAll(): Promise<DaratBaseJettieEntity[]> {
    return this.daratBaseJettiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratBaseJettieEntity> {
    return this.daratBaseJettiesService.findOne(id);
  }
}

