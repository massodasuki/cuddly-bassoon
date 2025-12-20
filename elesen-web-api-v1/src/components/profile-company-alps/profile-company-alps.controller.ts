import { Controller, Get, Param } from '@nestjs/common';
import { ProfileCompanyAlpService } from './profile-company-alps.service';
import { ProfileCompanyAlpEntity } from './profile-company-alps.entity';

@Controller('profile-company-alps')
export class ProfileCompanyAlpEntityController {
  constructor(private readonly profileCompanyAlpsService: ProfileCompanyAlpService) {}

  @Get()
  findAll(): Promise<ProfileCompanyAlpEntity[]> {
    return this.profileCompanyAlpsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProfileCompanyAlpEntity> {
    return this.profileCompanyAlpsService.findOne(id);
  }
}

