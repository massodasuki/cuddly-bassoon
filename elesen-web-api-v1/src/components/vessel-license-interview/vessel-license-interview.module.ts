import { Module } from '@nestjs/common';
import { VesselLicenseInterviewService } from './vessel-license-interview.service';
import { VesselLicenseInterviewController } from './vessel-license-interview.controller';
import { VesselLicenseInterviewEntity } from './vessel-license-interview.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseInterviewEntity])],
  providers: [VesselLicenseInterviewService],
  controllers: [VesselLicenseInterviewController],
  exports: [VesselLicenseInterviewService],
})
export class VesselLicenseInterviewModule {}