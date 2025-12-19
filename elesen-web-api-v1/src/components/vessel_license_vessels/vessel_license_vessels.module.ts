import { Module } from '@nestjs/common';
import { VesselLicenseVesselsService } from './vessel_license_vessels.service';
import { VesselLicenseVesselsController } from './vessel_license_vessels.controller';
import { VesselLicenseVesselsEntity } from './vessel_license_vessels.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseVesselsEntity])],
  providers: [VesselLicenseVesselsService],
  controllers: [VesselLicenseVesselsController],
  exports: [VesselLicenseVesselsService],
})
export class VesselLicenseVesselsModule {}