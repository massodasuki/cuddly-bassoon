import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfileUserService } from './profile-users.service';
import { CreateProfileUserDto } from './dto/create-profile-users.dto';
import { UpdateProfileUserDto } from './dto/update-profile-users.dto';
import { ProfileUser } from './profile-users.entity';

@Controller('profile-users')
export class ProfileUserController {
  constructor(private readonly profileUsersService: ProfileUserService) {}

  @Post()
  create(@Body() createProfileUserDto: CreateProfileUserDto): Promise<ProfileUser> {
    return this.profileUsersService.create(createProfileUserDto);
  }

  @Get()
  findAll(): Promise<ProfileUser[]> {
    return this.profileUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProfileUser> {
    return this.profileUsersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileUserDto: UpdateProfileUserDto): Promise<ProfileUser> {
    return this.profileUsersService.update(id, updateProfileUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.profileUsersService.remove(id);
  }
}