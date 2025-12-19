import { Module } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInspectionVesselsService } from './kpv03_vessel_license_application_inspection_vessels.service';
import { Kpv03VesselLicenseApplicationInspectionVesselsController } from './kpv03_vessel_license_application_inspection_vessels.controller';
import { Kpv03VesselLicenseApplicationInspectionVesselsEntity } from './kpv03_vessel_license_application_inspection_vessels.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kpv03VesselLicenseApplicationInspectionVesselsEntity])],
  providers: [Kpv03VesselLicenseApplicationInspectionVesselsService],
  controllers: [Kpv03VesselLicenseApplicationInspectionVesselsController],
  exports: [Kpv03VesselLicenseApplicationInspectionVesselsService],
})
export class Kpv03VesselLicenseApplicationInspectionVesselsModule {}