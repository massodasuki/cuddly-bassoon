import { Controller, Get, Param } from '@nestjs/common';
import { CulturedShellDetailService } from './cultured-shell-details.service';
import { CulturedShellDetailEntity } from './cultured-shell-details.entity';

@Controller('cultured-shell-details')
export class CulturedShellDetailEntityController {
  constructor(private readonly culturedShellDetailsService: CulturedShellDetailService) {}

  @Get()
  findAll(): Promise<CulturedShellDetailEntity[]> {
    return this.culturedShellDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CulturedShellDetailEntity> {
    return this.culturedShellDetailsService.findOne(id);
  }
}
