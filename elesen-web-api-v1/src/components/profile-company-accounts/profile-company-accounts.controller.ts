import { Controller, Get, Param } from '@nestjs/common';
import { ProfileCompanyAccountService } from './profile-company-accounts.service';
import { ProfileCompanyAccountEntity } from './profile-company-accounts.entity';

@Controller('profile-company-accounts')
export class ProfileCompanyAccountEntityController {
  constructor(private readonly profileCompanyAccountsService: ProfileCompanyAccountService) {}

  @Get()
  findAll(): Promise<ProfileCompanyAccountEntity[]> {
    return this.profileCompanyAccountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProfileCompanyAccountEntity> {
    return this.profileCompanyAccountsService.findOne(id);
  }
}

