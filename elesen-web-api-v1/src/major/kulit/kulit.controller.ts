import { Controller, Get, Param } from '@nestjs/common';
import { KulitEntityervice } from './kulit.service';
import { KulitEntity } from './kulit.entity';

@Controller('kulit')
export class KulitEntityController {
  constructor(private readonly kulitService: KulitEntityervice) {}

  @Get()
  findAll(): Promise<KulitEntity[]> {
    return this.kulitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<KulitEntity> {
    return this.kulitService.findOne(id);
  }
}
