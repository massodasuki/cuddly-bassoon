import { Module } from '@nestjs/common';
import { VesselLicenseApplicationsService } from './vessel-license-applications.service';
import { VesselLicenseApplicationsController } from './vessel-license-applications.controller';
import { VesselLicenseApplicationsEntity } from './vessel-license-applications.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseApplicationsEntity])],
  providers: [VesselLicenseApplicationsService],
  controllers: [VesselLicenseApplicationsController],
  exports: [VesselLicenseApplicationsService],
})
export class VesselLicenseApplicationsModule {}