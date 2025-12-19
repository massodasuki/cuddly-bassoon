import { Module } from '@nestjs/common';
import { VesselLicenseShareholdersService } from './vessel-license-shareholders.service';
import { VesselLicenseShareholdersController } from './vessel-license-shareholders.controller';
import { VesselLicenseShareholdersEntity } from './vessel-license-shareholders.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseShareholdersEntity])],
  providers: [VesselLicenseShareholdersService],
  controllers: [VesselLicenseShareholdersController],
  exports: [VesselLicenseShareholdersService],
})
export class VesselLicenseShareholdersModule {}