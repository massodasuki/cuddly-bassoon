import { Module } from '@nestjs/common';
import { ProfileCompanyAssetService } from './profile-company-assets.service';
import { ProfileCompanyAssetEntityController } from './profile-company-assets.controller';
import { ProfileCompanyAssetEntity } from './profile-company-assets.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileCompanyAssetEntity])],
  providers: [ProfileCompanyAssetService],
  controllers: [ProfileCompanyAssetEntityController],
  exports: [ProfileCompanyAssetService],
})
export class ProfileCompanyAssetModule {}
