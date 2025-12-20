import { Controller, Get, Param } from '@nestjs/common';
import { ProfileCompanyAssetService } from './profile-company-assets.service';
import { ProfileCompanyAssetEntity } from './profile-company-assets.entity';

@Controller('profile-company-assets')
export class ProfileCompanyAssetEntityController {
  constructor(private readonly profileCompanyAssetsService: ProfileCompanyAssetService) {}

  @Get()
  findAll(): Promise<ProfileCompanyAssetEntity[]> {
    return this.profileCompanyAssetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProfileCompanyAssetEntity> {
    return this.profileCompanyAssetsService.findOne(id);
  }
}

