import { Controller, Get, Param } from '@nestjs/common';
import { SerialNumberService } from './serial-numbers.service';
import { SerialNumberEntity } from './serial-numbers.entity';

@Controller('serial-numbers')
export class SerialNumberEntityController {
  constructor(private readonly serialNumbersService: SerialNumberService) {}

  @Get()
  findAll(): Promise<SerialNumberEntity[]> {
    return this.serialNumbersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SerialNumberEntity> {
    return this.serialNumbersService.findOne(id);
  }
}
