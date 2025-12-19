import { Module } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInspectionDetailsService } from './kpv03_vessel_license_application_inspection_details.service';
import { Kpv03VesselLicenseApplicationInspectionDetailsController } from './kpv03_vessel_license_application_inspection_details.controller';
import { Kpv03VesselLicenseApplicationInspectionDetailsEntity } from './kpv03_vessel_license_application_inspection_details.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kpv03VesselLicenseApplicationInspectionDetailsEntity])],
  providers: [Kpv03VesselLicenseApplicationInspectionDetailsService],
  controllers: [Kpv03VesselLicenseApplicationInspectionDetailsController],
  exports: [Kpv03VesselLicenseApplicationInspectionDetailsService],
})
export class Kpv03VesselLicenseApplicationInspectionDetailsModule {}