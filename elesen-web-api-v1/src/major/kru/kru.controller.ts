import { Controller, Get, Param } from '@nestjs/common';
import { KruEntityervice } from './kru.service';
import { KruEntity } from './kru.entity';

@Controller('kru')
export class KruEntityController {
  constructor(private readonly kruService: KruEntityervice) {}

  @Get()
  findAll(): Promise<KruEntity[]> {
    return this.kruService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<KruEntity> {
    return this.kruService.findOne(id);
  }
}
