import { Controller, Get, Param } from '@nestjs/common';
import { ProfileUserService } from './profile-users.service';
import { ProfileUserEntity } from './profile-users.entity';

@Controller('profile-users')
export class ProfileUserEntityController {
  constructor(private readonly profileUsersService: ProfileUserService) {}

  @Get()
  findAll(): Promise<ProfileUserEntity[]> {
    return this.profileUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProfileUserEntity> {
    return this.profileUsersService.findOne(id);
  }
}

