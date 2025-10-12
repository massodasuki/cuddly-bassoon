import { Controller, Get, Param } from '@nestjs/common';
import { ReferenceNumberService } from './reference-numbers.service';
import { ReferenceNumberEntity } from './reference-numbers.entity';

@Controller('reference-numbers')
export class ReferenceNumberEntityController {
  constructor(private readonly referenceNumbersService: ReferenceNumberService) {}

  @Get()
  findAll(): Promise<ReferenceNumberEntity[]> {
    return this.referenceNumbersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ReferenceNumberEntity> {
    return this.referenceNumbersService.findOne(id);
  }
}
