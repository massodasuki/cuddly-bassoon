import { Controller, Get, Param } from '@nestjs/common';
import { ProfilePengusahaSklService } from './profile-pengusaha-skls.service';
import { ProfilePengusahaSklEntity } from './profile-pengusaha-skls.entity';

@Controller('profile-pengusaha-skls')
export class ProfilePengusahaSklEntityController {
  constructor(private readonly profilePengusahaSklsService: ProfilePengusahaSklService) {}

  @Get()
  findAll(): Promise<ProfilePengusahaSklEntity[]> {
    return this.profilePengusahaSklsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProfilePengusahaSklEntity> {
    return this.profilePengusahaSklsService.findOne(id);
  }
}

