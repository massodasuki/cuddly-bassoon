import { Module } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationHistoriesService } from './kpv03_vessel_license_application_histories.service';
import { Kpv03VesselLicenseApplicationHistoriesController } from './kpv03_vessel_license_application_histories.controller';
import { Kpv03VesselLicenseApplicationHistoriesEntity } from './kpv03_vessel_license_application_histories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kpv03VesselLicenseApplicationHistoriesEntity])],
  providers: [Kpv03VesselLicenseApplicationHistoriesService],
  controllers: [Kpv03VesselLicenseApplicationHistoriesController],
  exports: [Kpv03VesselLicenseApplicationHistoriesService],
})
export class Kpv03VesselLicenseApplicationHistoriesModule {}