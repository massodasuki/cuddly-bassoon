import { Controller, Get, Param } from '@nestjs/common';
import { PenglibatanSyarikatService } from './penglibatan-syarikats.service';
import { PenglibatanSyarikatEntity } from './penglibatan-syarikats.entity';

@Controller('penglibatan-syarikats')
export class PenglibatanSyarikatEntityController {
  constructor(private readonly penglibatanSyarikatsService: PenglibatanSyarikatService) {}

  @Get()
  findAll(): Promise<PenglibatanSyarikatEntity[]> {
    return this.penglibatanSyarikatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PenglibatanSyarikatEntity> {
    return this.penglibatanSyarikatsService.findOne(id);
  }
}

