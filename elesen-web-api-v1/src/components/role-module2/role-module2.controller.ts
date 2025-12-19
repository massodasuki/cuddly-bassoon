import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoleModule2Service } from './role-module2.service';
import { CreateRoleModule2Dto } from './dto/create-role-module2.dto';
import { UpdateRoleModule2Dto } from './dto/update-role-module2.dto';

@Controller('role_module2')
export class RoleModule2Controller {
  constructor(private readonly rolemodule2service: RoleModule2Service) {}

  @Post()
  create(@Body() createRoleModule2Dto: CreateRoleModule2Dto) {
    return this.rolemodule2service.create(createRoleModule2Dto);
  }

  @Get()
  findAll() {
    return this.rolemodule2service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolemodule2service.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.rolemodule2service.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleModule2Dto: UpdateRoleModule2Dto) {
    return this.rolemodule2service.update(id, updateRoleModule2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolemodule2service.remove(id);
  }
}