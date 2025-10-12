import { Controller, Get, Param } from '@nestjs/common';
import { HebahanService } from './hebahans.service';
import { HebahanEntity } from './hebahans.entity';

@Controller('hebahans')
export class HebahanEntityController {
  constructor(private readonly hebahansService: HebahanService) {}

  @Get()
  findAll(): Promise<HebahanEntity[]> {
    return this.hebahansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<HebahanEntity> {
    return this.hebahansService.findOne(id);
  }
}
