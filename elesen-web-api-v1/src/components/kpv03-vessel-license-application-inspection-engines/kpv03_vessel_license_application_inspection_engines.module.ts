import { Module } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInspectionEnginesService } from './kpv03_vessel_license_application_inspection_engines.service';
import { Kpv03VesselLicenseApplicationInspectionEnginesController } from './kpv03_vessel_license_application_inspection_engines.controller';
import { Kpv03VesselLicenseApplicationInspectionEnginesEntity } from './kpv03_vessel_license_application_inspection_engines.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kpv03VesselLicenseApplicationInspectionEnginesEntity])],
  providers: [Kpv03VesselLicenseApplicationInspectionEnginesService],
  controllers: [Kpv03VesselLicenseApplicationInspectionEnginesController],
  exports: [Kpv03VesselLicenseApplicationInspectionEnginesService],
})
export class Kpv03VesselLicenseApplicationInspectionEnginesModule {}