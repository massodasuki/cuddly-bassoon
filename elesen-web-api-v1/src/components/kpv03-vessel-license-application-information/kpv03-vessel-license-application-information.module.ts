import { Module } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInformationService } from './kpv03-vessel-license-application-information.service';
import { Kpv03VesselLicenseApplicationInformationController } from './kpv03-vessel-license-application-information.controller';
import { Kpv03VesselLicenseApplicationInformationEntity } from './kpv03-vessel-license-application-information.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kpv03VesselLicenseApplicationInformationEntity])],
  providers: [Kpv03VesselLicenseApplicationInformationService],
  controllers: [Kpv03VesselLicenseApplicationInformationController],
  exports: [Kpv03VesselLicenseApplicationInformationService],
})
export class Kpv03VesselLicenseApplicationInformationModule {}