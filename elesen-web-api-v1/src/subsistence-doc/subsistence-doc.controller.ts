import { Controller, Get, Param } from '@nestjs/common';
import { SubsistenceDocEntityervice } from './subsistence-doc.service';
import { SubsistenceDocEntity } from './subsistence-doc.entity';

@Controller('subsistence-doc')
export class SubsistenceDocEntityController {
  constructor(private readonly subsistenceDocService: SubsistenceDocEntityervice) {}

  @Get()
  findAll(): Promise<SubsistenceDocEntity[]> {
    return this.subsistenceDocService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SubsistenceDocEntity> {
    return this.subsistenceDocService.findOne(id);
  }
}
