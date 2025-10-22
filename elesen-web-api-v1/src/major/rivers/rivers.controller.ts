import { Controller, Get, Param } from '@nestjs/common';
import { RiverService } from './rivers.service';
import { RiverEntity } from './rivers.entity';

@Controller('rivers')
export class RiverEntityController {
  constructor(private readonly riversService: RiverService) {}

  @Get()
  findAll(): Promise<RiverEntity[]> {
    return this.riversService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<RiverEntity> {
    return this.riversService.findOne(id);
  }
}
