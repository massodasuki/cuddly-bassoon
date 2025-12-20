import { Controller, Get, Param } from '@nestjs/common';
import { ShellsQuotaEntityervice } from './shells-quota.service';
import { ShellsQuotaEntity } from './shells-quota.entity';

@Controller('shells-quota')
export class ShellsQuotaEntityController {
  constructor(private readonly shellsQuotaService: ShellsQuotaEntityervice) {}

  @Get()
  findAll(): Promise<ShellsQuotaEntity[]> {
    return this.shellsQuotaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ShellsQuotaEntity> {
    return this.shellsQuotaService.findOne(id);
  }
}

