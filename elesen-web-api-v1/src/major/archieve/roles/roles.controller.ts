import { Controller, Get, Param } from '@nestjs/common';
import { RoleService } from './roles.service';
import { RoleEntity } from './roles.entity';

@Controller('roles')
export class RoleEntityController {
  constructor(private readonly rolesService: RoleService) {}

  @Get()
  findAll(): Promise<RoleEntity[]> {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<RoleEntity> {
    return this.rolesService.findOne(id);
  }
}
