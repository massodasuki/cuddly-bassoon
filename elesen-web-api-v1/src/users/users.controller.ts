import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserEntityDto } from './dto/create-user.dto';
import { UpdateUserEntityDto } from './dto/update-user.dto';

@Controller('users')
export class UserEntityController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  create(@Body() createUserEntityDto: CreateUserEntityDto) {
    return this.usersService.create(createUserEntityDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserEntityDto: UpdateUserEntityDto) {
    return this.usersService.update(id, updateUserEntityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}