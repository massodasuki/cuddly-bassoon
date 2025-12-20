import { Controller, Get, Param } from '@nestjs/common';
import { ProfileCompanieService } from './profile-companies.service';
import { ProfileCompanieEntity } from './profile-companies.entity';

@Controller('profile-companies')
export class ProfileCompanieEntityController {
  constructor(private readonly profileCompaniesService: ProfileCompanieService) {}

  @Get()
  findAll(): Promise<ProfileCompanieEntity[]> {
    return this.profileCompaniesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProfileCompanieEntity> {
    return this.profileCompaniesService.findOne(id);
  }
}

