import { Controller, Get, Param } from '@nestjs/common';
import { DaratApplicationService } from './darat-applications.service';
import { DaratApplicationEntity } from './darat-applications.entity';

@Controller('darat-applications')
export class DaratApplicationEntityController {
  constructor(private readonly daratApplicationsService: DaratApplicationService) {}

  @Get()
  findAll(): Promise<DaratApplicationEntity[]> {
    return this.daratApplicationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratApplicationEntity> {
    return this.daratApplicationsService.findOne(id);
  }
}

