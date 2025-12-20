import { Controller, Get, Param } from '@nestjs/common';
import { CulturedShellHistorieService } from './cultured-shell-histories.service';
import { CulturedShellHistorieEntity } from './cultured-shell-histories.entity';

@Controller('cultured-shell-histories')
export class CulturedShellHistorieEntityController {
  constructor(private readonly culturedShellHistoriesService: CulturedShellHistorieService) {}

  @Get()
  findAll(): Promise<CulturedShellHistorieEntity[]> {
    return this.culturedShellHistoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CulturedShellHistorieEntity> {
    return this.culturedShellHistoriesService.findOne(id);
  }
}

