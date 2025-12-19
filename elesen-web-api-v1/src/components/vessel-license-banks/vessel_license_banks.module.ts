import { Module } from '@nestjs/common';
import { VesselLicenseBanksService } from './vessel_license_banks.service';
import { VesselLicenseBanksController } from './vessel_license_banks.controller';
import { VesselLicenseBanksEntity } from './vessel_license_banks.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseBanksEntity])],
  providers: [VesselLicenseBanksService],
  controllers: [VesselLicenseBanksController],
  exports: [VesselLicenseBanksService],
})
export class VesselLicenseBanksModule {}