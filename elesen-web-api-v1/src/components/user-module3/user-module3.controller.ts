import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserModule3Service } from './user-module3.service';
import { CreateUserModule3Dto } from './dto/create-user-module3.dto';
import { UpdateUserModule3Dto } from './dto/update-user-module3.dto';

@Controller('user_module3')
export class UserModule3Controller {
  constructor(private readonly usermodule3service: UserModule3Service) {}

  @Post()
  create(@Body() createUserModule3Dto: CreateUserModule3Dto) {
    return this.usermodule3service.create(createUserModule3Dto);
  }

  @Get()
  findAll() {
    return this.usermodule3service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usermodule3service.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.usermodule3service.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserModule3Dto: UpdateUserModule3Dto) {
    return this.usermodule3service.update(id, updateUserModule3Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usermodule3service.remove(id);
  }
}