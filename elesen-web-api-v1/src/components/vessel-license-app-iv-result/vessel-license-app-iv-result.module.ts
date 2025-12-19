import { Module } from '@nestjs/common';
import { VesselLicenseAppIvResultService } from './vessel-license-app-iv-result.service';
import { VesselLicenseAppIvResultController } from './vessel-license-app-iv-result.controller';
import { VesselLicenseAppIvResultEntity } from './vessel-license-app-iv-result.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseAppIvResultEntity])],
  providers: [VesselLicenseAppIvResultService],
  controllers: [VesselLicenseAppIvResultController],
  exports: [VesselLicenseAppIvResultService],
})
export class VesselLicenseAppIvResultModule {}