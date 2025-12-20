import { Controller, Get, Param } from '@nestjs/common';
import { SubsistenceListEntityervice } from './subsistence-list.service';
import { SubsistenceListEntity } from './subsistence-list.entity';

@Controller('subsistence-list')
export class SubsistenceListEntityController {
  constructor(private readonly subsistenceListService: SubsistenceListEntityervice) {}

  @Get()
  findAll(): Promise<SubsistenceListEntity[]> {
    return this.subsistenceListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SubsistenceListEntity> {
    return this.subsistenceListService.findOne(id);
  }
}

