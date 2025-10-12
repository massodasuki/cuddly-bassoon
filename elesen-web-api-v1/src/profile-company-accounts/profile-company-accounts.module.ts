import { Module } from '@nestjs/common';
import { ProfileCompanyAccountService } from './profile-company-accounts.service';
import { ProfileCompanyAccountEntityController } from './profile-company-accounts.controller';
import { ProfileCompanyAccountEntity } from './profile-company-accounts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileCompanyAccountEntity])],
  providers: [ProfileCompanyAccountService],
  controllers: [ProfileCompanyAccountEntityController],
  exports: [ProfileCompanyAccountService],
})
export class ProfileCompanyAccountModule {}
