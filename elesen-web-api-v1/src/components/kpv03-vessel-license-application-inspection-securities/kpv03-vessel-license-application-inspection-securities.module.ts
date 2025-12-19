import { Module } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInspectionSecuritiesService } from './kpv03-vessel-license-application-inspection-securities.service';
import { Kpv03VesselLicenseApplicationInspectionSecuritiesController } from './kpv03-vessel-license-application-inspection-securities.controller';
import { Kpv03VesselLicenseApplicationInspectionSecuritiesEntity } from './kpv03-vessel-license-application-inspection-securities.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kpv03VesselLicenseApplicationInspectionSecuritiesEntity])],
  providers: [Kpv03VesselLicenseApplicationInspectionSecuritiesService],
  controllers: [Kpv03VesselLicenseApplicationInspectionSecuritiesController],
  exports: [Kpv03VesselLicenseApplicationInspectionSecuritiesService],
})
export class Kpv03VesselLicenseApplicationInspectionSecuritiesModule {}