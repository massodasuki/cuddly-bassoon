import { Controller, Get, Param } from '@nestjs/common';
import { MuatanEntityervice } from './muatan.service';
import { MuatanEntity } from './muatan.entity';

@Controller('muatan')
export class MuatanEntityController {
  constructor(private readonly muatanService: MuatanEntityervice) {}

  @Get()
  findAll(): Promise<MuatanEntity[]> {
    return this.muatanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<MuatanEntity> {
    return this.muatanService.findOne(id);
  }
}
