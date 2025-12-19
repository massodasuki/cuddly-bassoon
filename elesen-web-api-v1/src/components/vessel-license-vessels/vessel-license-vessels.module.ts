import { Module } from '@nestjs/common';
import { VesselLicenseVesselsService } from './vessel-license-vessels.service';
import { VesselLicenseVesselsController } from './vessel-license-vessels.controller';
import { VesselLicenseVesselsEntity } from './vessel-license-vessels.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseVesselsEntity])],
  providers: [VesselLicenseVesselsService],
  controllers: [VesselLicenseVesselsController],
  exports: [VesselLicenseVesselsService],
})
export class VesselLicenseVesselsModule {}