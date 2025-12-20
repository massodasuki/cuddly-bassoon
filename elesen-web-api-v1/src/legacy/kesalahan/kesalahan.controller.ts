import { Controller, Get, Param } from '@nestjs/common';
import { KesalahanEntityervice } from './kesalahan.service';
import { KesalahanEntity } from './kesalahan.entity';

@Controller('kesalahan')
export class KesalahanEntityController {
  constructor(private readonly kesalahanService: KesalahanEntityervice) {}

  @Get()
  findAll(): Promise<KesalahanEntity[]> {
    return this.kesalahanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<KesalahanEntity> {
    return this.kesalahanService.findOne(id);
  }
}

