import { Module } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInspectionVesselsService } from './kpv03-vessel-license-application-inspection-vessels.service';
import { Kpv03VesselLicenseApplicationInspectionVesselsController } from './kpv03-vessel-license-application-inspection-vessels.controller';
import { Kpv03VesselLicenseApplicationInspectionVesselsEntity } from './kpv03-vessel-license-application-inspection-vessels.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kpv03VesselLicenseApplicationInspectionVesselsEntity])],
  providers: [Kpv03VesselLicenseApplicationInspectionVesselsService],
  controllers: [Kpv03VesselLicenseApplicationInspectionVesselsController],
  exports: [Kpv03VesselLicenseApplicationInspectionVesselsService],
})
export class Kpv03VesselLicenseApplicationInspectionVesselsModule {}