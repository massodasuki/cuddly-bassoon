import { Module } from '@nestjs/common';
import { VesselLicenseApplicationTrailsService } from './vessel-license-application-trails.service';
import { VesselLicenseApplicationTrailsController } from './vessel-license-application-trails.controller';
import { VesselLicenseApplicationTrailsEntity } from './vessel-license-application-trails.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseApplicationTrailsEntity])],
  providers: [VesselLicenseApplicationTrailsService],
  controllers: [VesselLicenseApplicationTrailsController],
  exports: [VesselLicenseApplicationTrailsService],
})
export class VesselLicenseApplicationTrailsModule {}