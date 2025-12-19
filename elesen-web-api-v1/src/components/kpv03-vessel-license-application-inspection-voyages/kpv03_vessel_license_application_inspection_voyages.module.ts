import { Module } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInspectionVoyagesService } from './kpv03_vessel_license_application_inspection_voyages.service';
import { Kpv03VesselLicenseApplicationInspectionVoyagesController } from './kpv03_vessel_license_application_inspection_voyages.controller';
import { Kpv03VesselLicenseApplicationInspectionVoyagesEntity } from './kpv03_vessel_license_application_inspection_voyages.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kpv03VesselLicenseApplicationInspectionVoyagesEntity])],
  providers: [Kpv03VesselLicenseApplicationInspectionVoyagesService],
  controllers: [Kpv03VesselLicenseApplicationInspectionVoyagesController],
  exports: [Kpv03VesselLicenseApplicationInspectionVoyagesService],
})
export class Kpv03VesselLicenseApplicationInspectionVoyagesModule {}