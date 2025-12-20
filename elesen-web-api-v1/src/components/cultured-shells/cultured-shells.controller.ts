import { Controller, Get, Param } from '@nestjs/common';
import { CulturedShellService } from './cultured-shells.service';
import { CulturedShellEntity } from './cultured-shells.entity';

@Controller('cultured-shells')
export class CulturedShellEntityController {
  constructor(private readonly culturedShellsService: CulturedShellService) {}

  @Get()
  findAll(): Promise<CulturedShellEntity[]> {
    return this.culturedShellsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CulturedShellEntity> {
    return this.culturedShellsService.findOne(id);
  }
}

