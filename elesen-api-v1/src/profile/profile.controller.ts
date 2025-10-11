import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileResponseDto } from './dto/profile-response.dto';
import { ProfileDto } from './dto/profile.dto';

@Controller('api/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async findAll(): Promise<ProfileResponseDto> {
    const data = await this.profileService.findAll();
    return { data };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProfileDto> {
    return this.profileService.findOne(id);
  }
}