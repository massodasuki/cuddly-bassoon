import { Controller, Get, Param } from '@nestjs/common';
import { DaratItemFoundService } from './darat-item-founds.service';
import { DaratItemFoundEntity } from './darat-item-founds.entity';

@Controller('darat-item-founds')
export class DaratItemFoundEntityController {
  constructor(private readonly daratItemFoundsService: DaratItemFoundService) {}

  @Get()
  findAll(): Promise<DaratItemFoundEntity[]> {
    return this.daratItemFoundsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratItemFoundEntity> {
    return this.daratItemFoundsService.findOne(id);
  }
}
