import { Controller, Get, Param } from '@nestjs/common';
import { DaratApplicationApprovedService } from './darat-application-approveds.service';
import { DaratApplicationApprovedEntity } from './darat-application-approveds.entity';

@Controller('darat-application-approveds')
export class DaratApplicationApprovedEntityController {
  constructor(private readonly daratApplicationApprovedsService: DaratApplicationApprovedService) {}

  @Get()
  findAll(): Promise<DaratApplicationApprovedEntity[]> {
    return this.daratApplicationApprovedsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratApplicationApprovedEntity> {
    return this.daratApplicationApprovedsService.findOne(id);
  }
}

