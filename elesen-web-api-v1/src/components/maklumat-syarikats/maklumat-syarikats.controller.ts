import { Controller, Get, Param } from '@nestjs/common';
import { MaklumatSyarikatService } from './maklumat-syarikats.service';
import { MaklumatSyarikatEntity } from './maklumat-syarikats.entity';

@Controller('maklumat-syarikats')
export class MaklumatSyarikatEntityController {
  constructor(private readonly maklumatSyarikatsService: MaklumatSyarikatService) {}

  @Get()
  findAll(): Promise<MaklumatSyarikatEntity[]> {
    return this.maklumatSyarikatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<MaklumatSyarikatEntity> {
    return this.maklumatSyarikatsService.findOne(id);
  }
}

