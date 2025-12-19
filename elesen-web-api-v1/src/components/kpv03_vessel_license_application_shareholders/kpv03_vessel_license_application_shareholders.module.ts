import { Module } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationShareholdersService } from './kpv03_vessel_license_application_shareholders.service';
import { Kpv03VesselLicenseApplicationShareholdersController } from './kpv03_vessel_license_application_shareholders.controller';
import { Kpv03VesselLicenseApplicationShareholdersEntity } from './kpv03_vessel_license_application_shareholders.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kpv03VesselLicenseApplicationShareholdersEntity])],
  providers: [Kpv03VesselLicenseApplicationShareholdersService],
  controllers: [Kpv03VesselLicenseApplicationShareholdersController],
  exports: [Kpv03VesselLicenseApplicationShareholdersService],
})
export class Kpv03VesselLicenseApplicationShareholdersModule {}