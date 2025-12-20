import { Controller, Get, Param } from '@nestjs/common';
import { StateOfficeMappingService } from './state-office-mappings.service';
import { StateOfficeMappingEntity } from './state-office-mappings.entity';

@Controller('state-office-mappings')
export class StateOfficeMappingEntityController {
  constructor(private readonly stateOfficeMappingsService: StateOfficeMappingService) {}

  @Get()
  findAll(): Promise<StateOfficeMappingEntity[]> {
    return this.stateOfficeMappingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<StateOfficeMappingEntity> {
    return this.stateOfficeMappingsService.findOne(id);
  }
}

