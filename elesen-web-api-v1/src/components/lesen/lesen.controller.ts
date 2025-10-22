import { Controller, Get, Param } from '@nestjs/common';
import { LesenEntityervice } from './lesen.service';
import { LesenEntity } from './lesen.entity';

@Controller('lesen')
export class LesenEntityController {
  constructor(private readonly lesenService: LesenEntityervice) {}

  @Get()
  findAll(): Promise<LesenEntity[]> {
    return this.lesenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<LesenEntity> {
    return this.lesenService.findOne(id);
  }
}
