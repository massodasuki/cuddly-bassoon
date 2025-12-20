import { Controller, Get, Param } from '@nestjs/common';
import { PematuhanEntityervice } from './pematuhan.service';
import { PematuhanEntity } from './pematuhan.entity';

@Controller('pematuhan')
export class PematuhanEntityController {
  constructor(private readonly pematuhanService: PematuhanEntityervice) {}

  @Get()
  findAll(): Promise<PematuhanEntity[]> {
    return this.pematuhanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PematuhanEntity> {
    return this.pematuhanService.findOne(id);
  }
}

