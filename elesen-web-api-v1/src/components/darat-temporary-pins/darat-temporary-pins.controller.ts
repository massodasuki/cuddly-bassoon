import { Controller, Get, Param } from '@nestjs/common';
import { DaratTemporaryPinService } from './darat-temporary-pins.service';
import { DaratTemporaryPinEntity } from './darat-temporary-pins.entity';

@Controller('darat-temporary-pins')
export class DaratTemporaryPinEntityController {
  constructor(private readonly daratTemporaryPinsService: DaratTemporaryPinService) {}

  @Get()
  findAll(): Promise<DaratTemporaryPinEntity[]> {
    return this.daratTemporaryPinsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratTemporaryPinEntity> {
    return this.daratTemporaryPinsService.findOne(id);
  }
}
