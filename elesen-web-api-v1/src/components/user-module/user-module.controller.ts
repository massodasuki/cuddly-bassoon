import { Controller, Get, Param } from '@nestjs/common';
import { UserModuleEntityervice } from './user-module.service';
import { UserModuleEntity } from './user-module.entity';

@Controller('user-module')
export class UserModuleEntityController {
  constructor(private readonly userModuleService: UserModuleEntityervice) {}

  @Get()
  findAll(): Promise<UserModuleEntity[]> {
    return this.userModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserModuleEntity> {
    return this.userModuleService.findOne(id);
  }
}
