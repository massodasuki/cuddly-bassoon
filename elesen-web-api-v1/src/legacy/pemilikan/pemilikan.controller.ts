import { Controller, Get, Param } from '@nestjs/common';
import { PemilikanEntityervice } from './pemilikan.service';
import { PemilikanEntity } from './pemilikan.entity';

@Controller('pemilikan')
export class PemilikanEntityController {
  constructor(private readonly pemilikanService: PemilikanEntityervice) {}

  @Get()
  findAll(): Promise<PemilikanEntity[]> {
    return this.pemilikanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PemilikanEntity> {
    return this.pemilikanService.findOne(id);
  }
}

