import { Module } from '@nestjs/common';
import { VesselLicenseApplicationsService } from './vessel_license_applications.service';
import { VesselLicenseApplicationsController } from './vessel_license_applications.controller';
import { VesselLicenseApplicationsEntity } from './vessel_license_applications.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseApplicationsEntity])],
  providers: [VesselLicenseApplicationsService],
  controllers: [VesselLicenseApplicationsController],
  exports: [VesselLicenseApplicationsService],
})
export class VesselLicenseApplicationsModule {}