import { Controller, Get, Param } from '@nestjs/common';
import { RoleModuleEntityervice } from './role-module.service';
import { RoleModuleEntity } from './role-module.entity';

@Controller('role-module')
export class RoleModuleEntityController {
  constructor(private readonly roleModuleService: RoleModuleEntityervice) {}

  @Get()
  findAll(): Promise<RoleModuleEntity[]> {
    return this.roleModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<RoleModuleEntity> {
    return this.roleModuleService.findOne(id);
  }
}
