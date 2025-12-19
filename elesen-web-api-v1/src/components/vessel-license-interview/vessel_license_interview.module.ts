import { Module } from '@nestjs/common';
import { VesselLicenseInterviewService } from './vessel_license_interview.service';
import { VesselLicenseInterviewController } from './vessel_license_interview.controller';
import { VesselLicenseInterviewEntity } from './vessel_license_interview.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseInterviewEntity])],
  providers: [VesselLicenseInterviewService],
  controllers: [VesselLicenseInterviewController],
  exports: [VesselLicenseInterviewService],
})
export class VesselLicenseInterviewModule {}