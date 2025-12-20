import { Controller, Get, Param } from '@nestjs/common';
import { EnjinEntityervice } from './enjin.service';
import { EnjinEntity } from './enjin.entity';

@Controller('enjin')
export class EnjinEntityController {
  constructor(private readonly enjinService: EnjinEntityervice) {}

  @Get()
  findAll(): Promise<EnjinEntity[]> {
    return this.enjinService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<EnjinEntity> {
    return this.enjinService.findOne(id);
  }
}

