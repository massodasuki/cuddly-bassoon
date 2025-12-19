import { Module } from '@nestjs/common';
import { VesselLicenseShareholdersService } from './vessel_license_shareholders.service';
import { VesselLicenseShareholdersController } from './vessel_license_shareholders.controller';
import { VesselLicenseShareholdersEntity } from './vessel_license_shareholders.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseShareholdersEntity])],
  providers: [VesselLicenseShareholdersService],
  controllers: [VesselLicenseShareholdersController],
  exports: [VesselLicenseShareholdersService],
})
export class VesselLicenseShareholdersModule {}