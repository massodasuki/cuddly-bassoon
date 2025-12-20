import { Controller, Get, Param } from '@nestjs/common';
import { KruApplicationService } from './kru-applications.service';
import { KruApplicationEntity } from './kru-applications.entity';

@Controller('kru-applications')
export class KruApplicationEntityController {
  constructor(private readonly kruApplicationsService: KruApplicationService) {}

  @Get()
  findAll(): Promise<KruApplicationEntity[]> {
    return this.kruApplicationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<KruApplicationEntity> {
    return this.kruApplicationsService.findOne(id);
  }
}

