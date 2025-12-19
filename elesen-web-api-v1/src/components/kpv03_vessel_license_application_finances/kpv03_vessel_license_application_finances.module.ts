import { Module } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationFinancesService } from './kpv03_vessel_license_application_finances.service';
import { Kpv03VesselLicenseApplicationFinancesController } from './kpv03_vessel_license_application_finances.controller';
import { Kpv03VesselLicenseApplicationFinancesEntity } from './kpv03_vessel_license_application_finances.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kpv03VesselLicenseApplicationFinancesEntity])],
  providers: [Kpv03VesselLicenseApplicationFinancesService],
  controllers: [Kpv03VesselLicenseApplicationFinancesController],
  exports: [Kpv03VesselLicenseApplicationFinancesService],
})
export class Kpv03VesselLicenseApplicationFinancesModule {}