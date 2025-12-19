import { Module } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInspectionDetailsService } from './kpv03-vessel-license-application-inspection-details.service';
import { Kpv03VesselLicenseApplicationInspectionDetailsController } from './kpv03-vessel-license-application-inspection-details.controller';
import { Kpv03VesselLicenseApplicationInspectionDetailsEntity } from './kpv03-vessel-license-application-inspection-details.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kpv03VesselLicenseApplicationInspectionDetailsEntity])],
  providers: [Kpv03VesselLicenseApplicationInspectionDetailsService],
  controllers: [Kpv03VesselLicenseApplicationInspectionDetailsController],
  exports: [Kpv03VesselLicenseApplicationInspectionDetailsService],
})
export class Kpv03VesselLicenseApplicationInspectionDetailsModule {}