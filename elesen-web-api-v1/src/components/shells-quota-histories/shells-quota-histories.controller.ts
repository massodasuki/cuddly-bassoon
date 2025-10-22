import { Controller, Get, Param } from '@nestjs/common';
import { ShellsQuotaHistorieService } from './shells-quota-histories.service';
import { ShellsQuotaHistorieEntity } from './shells-quota-histories.entity';

@Controller('shells-quota-histories')
export class ShellsQuotaHistorieEntityController {
  constructor(private readonly shellsQuotaHistoriesService: ShellsQuotaHistorieService) {}

  @Get()
  findAll(): Promise<ShellsQuotaHistorieEntity[]> {
    return this.shellsQuotaHistoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ShellsQuotaHistorieEntity> {
    return this.shellsQuotaHistoriesService.findOne(id);
  }
}
