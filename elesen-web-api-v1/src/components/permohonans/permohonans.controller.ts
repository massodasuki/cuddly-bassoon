import { Controller, Get, Param } from '@nestjs/common';
import { PermohonanService } from './permohonans.service';
import { PermohonanEntity } from './permohonans.entity';

@Controller('permohonans')
export class PermohonanEntityController {
  constructor(private readonly permohonansService: PermohonanService) {}

  @Get()
  findAll(): Promise<PermohonanEntity[]> {
    return this.permohonansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PermohonanEntity> {
    return this.permohonansService.findOne(id);
  }
}

