import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserRole2Service } from './user-role2.service';
import { CreateUserRole2Dto } from './dto/create-user-role2.dto';
import { UpdateUserRole2Dto } from './dto/update-user-role2.dto';

@Controller('user_role2')
export class UserRole2Controller {
  constructor(private readonly userrole2service: UserRole2Service) {}

  @Post()
  create(@Body() createUserRole2Dto: CreateUserRole2Dto) {
    return this.userrole2service.create(createUserRole2Dto);
  }

  @Get()
  findAll() {
    return this.userrole2service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userrole2service.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.userrole2service.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserRole2Dto: UpdateUserRole2Dto) {
    return this.userrole2service.update(id, updateUserRole2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userrole2service.remove(id);
  }
}