import { Controller, Get, Param } from '@nestjs/common';
import { ProfilePentadbirHartaService } from './profile-pentadbir-hartas.service';
import { ProfilePentadbirHartaEntity } from './profile-pentadbir-hartas.entity';

@Controller('profile-pentadbir-hartas')
export class ProfilePentadbirHartaEntityController {
  constructor(private readonly profilePentadbirHartasService: ProfilePentadbirHartaService) {}

  @Get()
  findAll(): Promise<ProfilePentadbirHartaEntity[]> {
    return this.profilePentadbirHartasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProfilePentadbirHartaEntity> {
    return this.profilePentadbirHartasService.findOne(id);
  }
}

