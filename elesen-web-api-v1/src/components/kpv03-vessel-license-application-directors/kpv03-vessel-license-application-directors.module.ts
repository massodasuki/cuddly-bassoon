import { Module } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationDirectorsService } from './kpv03-vessel-license-application-directors.service';
import { Kpv03VesselLicenseApplicationDirectorsController } from './kpv03-vessel-license-application-directors.controller';
import { Kpv03VesselLicenseApplicationDirectorsEntity } from './kpv03-vessel-license-application-directors.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kpv03VesselLicenseApplicationDirectorsEntity])],
  providers: [Kpv03VesselLicenseApplicationDirectorsService],
  controllers: [Kpv03VesselLicenseApplicationDirectorsController],
  exports: [Kpv03VesselLicenseApplicationDirectorsService],
})
export class Kpv03VesselLicenseApplicationDirectorsModule {}