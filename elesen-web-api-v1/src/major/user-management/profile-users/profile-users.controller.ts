import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfileUserService } from './profile-users.service';
import { CreateProfileUserDto } from './dto/create-profile-users.dto';
import { UpdateProfileUserDto } from './dto/update-profile-users.dto';
import { ProfileUserEntity } from './profile-users.entity';

@Controller('/api/v1/applications/profile-users')
export class ProfileUserController {
  constructor(private readonly profileUsersService: ProfileUserService) {}

  @Post()
  create(@Body() createProfileUserDto: CreateProfileUserDto): Promise<ProfileUserEntity> {
    return this.profileUsersService.create(createProfileUserDto);
  }

  @Get()
  findAll(): Promise<ProfileUserEntity[]> {
    return this.profileUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProfileUserEntity> {
    return this.profileUsersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileUserDto: UpdateProfileUserDto): Promise<ProfileUserEntity> {
    return this.profileUsersService.update(id, updateProfileUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.profileUsersService.remove(id);
  }
}