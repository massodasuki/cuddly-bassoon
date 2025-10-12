import { Controller, Get, Param } from '@nestjs/common';
import { ProfileUserVesselService } from './profile-user-vessel.service';
import { ProfileUserVesselEntity } from './profile-user-vessel.entity';

@Controller('profile-user-vessel')
export class ProfileUserVesselEntityController {
  constructor(private readonly profileUserVesselService: ProfileUserVesselService) {}

  @Get()
  findAll(): Promise<ProfileUserVesselEntity[]> {
    return this.profileUserVesselService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProfileUserVesselEntity> {
    return this.profileUserVesselService.findOne(id);
  }
}
