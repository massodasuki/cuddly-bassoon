import { Controller, Get, Param, NotFoundException } from '@nestjs/common';

import { ProfileUserDetailsService } from './profile-user-details.service';

@Controller('/api/v1/applications/profile-user-details')
export class ProfileUserDetailsController {
  constructor(private readonly profileUserDetailsService: ProfileUserDetailsService) {}

  @Get()
  async getProfileUserDetails() {
    const data = await this.profileUserDetailsService.getProfileUserDetails();
    return { data };
  }

  @Get(':id')
  async getProfileUserDetailById(@Param('id') id: string) {
    const data = await this.profileUserDetailsService.getProfileUserDetailById(id);
    if (!data) {
      throw new NotFoundException(`Profile user with id ${id} not found`);
    }
    return { data };
  }
}