import { Module } from '@nestjs/common';
import { VesselLicenseAppIvResultService } from './vessel_license_app_iv_result.service';
import { VesselLicenseAppIvResultController } from './vessel_license_app_iv_result.controller';
import { VesselLicenseAppIvResultEntity } from './vessel_license_app_iv_result.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseAppIvResultEntity])],
  providers: [VesselLicenseAppIvResultService],
  controllers: [VesselLicenseAppIvResultController],
  exports: [VesselLicenseAppIvResultService],
})
export class VesselLicenseAppIvResultModule {}