import { Controller, Get, Param } from '@nestjs/common';
import { ConfiscationEntityervice } from './confiscation.service';
import { ConfiscationEntity } from './confiscation.entity';

@Controller('confiscation')
export class ConfiscationEntityController {
  constructor(private readonly confiscationService: ConfiscationEntityervice) {}

  @Get()
  findAll(): Promise<ConfiscationEntity[]> {
    return this.confiscationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ConfiscationEntity> {
    return this.confiscationService.findOne(id);
  }
}
