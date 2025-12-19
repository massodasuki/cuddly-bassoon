import { Module } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInspectionItemsService } from './kpv03_vessel_license_application_inspection_items.service';
import { Kpv03VesselLicenseApplicationInspectionItemsController } from './kpv03_vessel_license_application_inspection_items.controller';
import { Kpv03VesselLicenseApplicationInspectionItemsEntity } from './kpv03_vessel_license_application_inspection_items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kpv03VesselLicenseApplicationInspectionItemsEntity])],
  providers: [Kpv03VesselLicenseApplicationInspectionItemsService],
  controllers: [Kpv03VesselLicenseApplicationInspectionItemsController],
  exports: [Kpv03VesselLicenseApplicationInspectionItemsService],
})
export class Kpv03VesselLicenseApplicationInspectionItemsModule {}