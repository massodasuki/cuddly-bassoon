import { Controller, Get, Param } from '@nestjs/common';
import { ProfilePentadbirHartaVesselEntityervice } from './profile-pentadbir-harta-vessel.service';
import { ProfilePentadbirHartaVesselEntity } from './profile-pentadbir-harta-vessel.entity';

@Controller('profile-pentadbir-harta-vessel')
export class ProfilePentadbirHartaVesselEntityController {
  constructor(private readonly profilePentadbirHartaVesselService: ProfilePentadbirHartaVesselEntityervice) {}

  @Get()
  findAll(): Promise<ProfilePentadbirHartaVesselEntity[]> {
    return this.profilePentadbirHartaVesselService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProfilePentadbirHartaVesselEntity> {
    return this.profilePentadbirHartaVesselService.findOne(id);
  }
}
