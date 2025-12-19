import { Module } from '@nestjs/common';
import { VesselLicenseApplicationTrailsService } from './vessel_license_application_trails.service';
import { VesselLicenseApplicationTrailsController } from './vessel_license_application_trails.controller';
import { VesselLicenseApplicationTrailsEntity } from './vessel_license_application_trails.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseApplicationTrailsEntity])],
  providers: [VesselLicenseApplicationTrailsService],
  controllers: [VesselLicenseApplicationTrailsController],
  exports: [VesselLicenseApplicationTrailsService],
})
export class VesselLicenseApplicationTrailsModule {}