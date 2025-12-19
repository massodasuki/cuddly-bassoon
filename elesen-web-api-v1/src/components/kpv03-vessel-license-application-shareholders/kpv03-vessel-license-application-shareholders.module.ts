import { Module } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationShareholdersService } from './kpv03-vessel-license-application-shareholders.service';
import { Kpv03VesselLicenseApplicationShareholdersController } from './kpv03-vessel-license-application-shareholders.controller';
import { Kpv03VesselLicenseApplicationShareholdersEntity } from './kpv03-vessel-license-application-shareholders.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kpv03VesselLicenseApplicationShareholdersEntity])],
  providers: [Kpv03VesselLicenseApplicationShareholdersService],
  controllers: [Kpv03VesselLicenseApplicationShareholdersController],
  exports: [Kpv03VesselLicenseApplicationShareholdersService],
})
export class Kpv03VesselLicenseApplicationShareholdersModule {}