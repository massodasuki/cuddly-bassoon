import { Module } from '@nestjs/common';
import { VesselLicenseDirectorsService } from './vessel-license-directors.service';
import { VesselLicenseDirectorsController } from './vessel-license-directors.controller';
import { VesselLicenseDirectorsEntity } from './vessel-license-directors.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseDirectorsEntity])],
  providers: [VesselLicenseDirectorsService],
  controllers: [VesselLicenseDirectorsController],
  exports: [VesselLicenseDirectorsService],
})
export class VesselLicenseDirectorsModule {}