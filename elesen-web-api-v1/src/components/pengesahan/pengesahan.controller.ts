import { Controller, Get, Param } from '@nestjs/common';
import { PengesahanEntityervice } from './pengesahan.service';
import { PengesahanEntity } from './pengesahan.entity';

@Controller('pengesahan')
export class PengesahanEntityController {
  constructor(private readonly pengesahanService: PengesahanEntityervice) {}

  @Get()
  findAll(): Promise<PengesahanEntity[]> {
    return this.pengesahanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PengesahanEntity> {
    return this.pengesahanService.findOne(id);
  }
}
