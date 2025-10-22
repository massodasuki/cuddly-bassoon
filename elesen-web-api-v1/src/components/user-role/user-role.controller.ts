import { Controller, Get, Param } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { UserRoleEntity } from './user-role.entity';

@Controller('user-role')
export class UserRoleEntityController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Get()
  findAll(): Promise<UserRoleEntity[]> {
    return this.userRoleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserRoleEntity> {
    return this.userRoleService.findOne(id);
  }
}
