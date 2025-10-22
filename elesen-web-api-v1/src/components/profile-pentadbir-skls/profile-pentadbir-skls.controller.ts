import { Controller, Get, Param } from '@nestjs/common';
import { ProfilePentadbirSklService } from './profile-pentadbir-skls.service';
import { ProfilePentadbirSklEntity } from './profile-pentadbir-skls.entity';

@Controller('profile-pentadbir-skls')
export class ProfilePentadbirSklEntityController {
  constructor(private readonly profilePentadbirSklsService: ProfilePentadbirSklService) {}

  @Get()
  findAll(): Promise<ProfilePentadbirSklEntity[]> {
    return this.profilePentadbirSklsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProfilePentadbirSklEntity> {
    return this.profilePentadbirSklsService.findOne(id);
  }
}
