import { Controller, Get, Param } from '@nestjs/common';
import { ImmigrationGateService } from './immigration-gates.service';
import { ImmigrationGateEntity } from './immigration-gates.entity';

@Controller('immigration-gates')
export class ImmigrationGateEntityController {
  constructor(private readonly immigrationGatesService: ImmigrationGateService) {}

  @Get()
  findAll(): Promise<ImmigrationGateEntity[]> {
    return this.immigrationGatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ImmigrationGateEntity> {
    return this.immigrationGatesService.findOne(id);
  }
}

