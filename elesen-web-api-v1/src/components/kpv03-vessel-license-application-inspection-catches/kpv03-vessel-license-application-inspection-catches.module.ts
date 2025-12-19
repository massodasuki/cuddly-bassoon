import { Module } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInspectionCatchesService } from './kpv03-vessel-license-application-inspection-catches.service';
import { Kpv03VesselLicenseApplicationInspectionCatchesController } from './kpv03-vessel-license-application-inspection-catches.controller';
import { Kpv03VesselLicenseApplicationInspectionCatchesEntity } from './kpv03-vessel-license-application-inspection-catches.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kpv03VesselLicenseApplicationInspectionCatchesEntity])],
  providers: [Kpv03VesselLicenseApplicationInspectionCatchesService],
  controllers: [Kpv03VesselLicenseApplicationInspectionCatchesController],
  exports: [Kpv03VesselLicenseApplicationInspectionCatchesService],
})
export class Kpv03VesselLicenseApplicationInspectionCatchesModule {}