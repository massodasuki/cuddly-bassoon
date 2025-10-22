import { Controller, Get, Param } from '@nestjs/common';
import { ModuleService } from './modules.service';
import { ModuleEntity } from './modules.entity';

@Controller('modules')
export class ModuleEntitysController {
  constructor(private readonly modulesService: ModuleService) {}

  @Get()
  findAll(): Promise<ModuleEntity[]> {
    return this.modulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ModuleEntity> {
    return this.modulesService.findOne(id);
  }
}
