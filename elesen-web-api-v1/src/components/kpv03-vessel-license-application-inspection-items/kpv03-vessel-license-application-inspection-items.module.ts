import { Module } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInspectionItemsService } from './kpv03-vessel-license-application-inspection-items.service';
import { Kpv03VesselLicenseApplicationInspectionItemsController } from './kpv03-vessel-license-application-inspection-items.controller';
import { Kpv03VesselLicenseApplicationInspectionItemsEntity } from './kpv03-vessel-license-application-inspection-items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kpv03VesselLicenseApplicationInspectionItemsEntity])],
  providers: [Kpv03VesselLicenseApplicationInspectionItemsService],
  controllers: [Kpv03VesselLicenseApplicationInspectionItemsController],
  exports: [Kpv03VesselLicenseApplicationInspectionItemsService],
})
export class Kpv03VesselLicenseApplicationInspectionItemsModule {}