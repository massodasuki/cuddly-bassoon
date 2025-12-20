import { Controller, Get, Param } from '@nestjs/common';
import { EshndQuotaService } from './eshnd-quotas.service';
import { EshndQuotaEntity } from './eshnd-quotas.entity';

@Controller('eshnd-quotas')
export class EshndQuotaEntityController {
  constructor(private readonly eshndQuotasService: EshndQuotaService) {}

  @Get()
  findAll(): Promise<EshndQuotaEntity[]> {
    return this.eshndQuotasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<EshndQuotaEntity> {
    return this.eshndQuotasService.findOne(id);
  }
}

