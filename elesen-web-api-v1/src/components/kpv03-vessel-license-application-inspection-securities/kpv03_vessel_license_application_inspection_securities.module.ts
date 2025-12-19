import { Module } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInspectionSecuritiesService } from './kpv03_vessel_license_application_inspection_securities.service';
import { Kpv03VesselLicenseApplicationInspectionSecuritiesController } from './kpv03_vessel_license_application_inspection_securities.controller';
import { Kpv03VesselLicenseApplicationInspectionSecuritiesEntity } from './kpv03_vessel_license_application_inspection_securities.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kpv03VesselLicenseApplicationInspectionSecuritiesEntity])],
  providers: [Kpv03VesselLicenseApplicationInspectionSecuritiesService],
  controllers: [Kpv03VesselLicenseApplicationInspectionSecuritiesController],
  exports: [Kpv03VesselLicenseApplicationInspectionSecuritiesService],
})
export class Kpv03VesselLicenseApplicationInspectionSecuritiesModule {}