import { Module } from '@nestjs/common';
import { VesselLicenseDirectorsService } from './vessel_license_directors.service';
import { VesselLicenseDirectorsController } from './vessel_license_directors.controller';
import { VesselLicenseDirectorsEntity } from './vessel_license_directors.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseDirectorsEntity])],
  providers: [VesselLicenseDirectorsService],
  controllers: [VesselLicenseDirectorsController],
  exports: [VesselLicenseDirectorsService],
})
export class VesselLicenseDirectorsModule {}