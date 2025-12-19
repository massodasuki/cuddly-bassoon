import { Module } from '@nestjs/common';
import { VesselLicenseBanksService } from './vessel-license-banks.service';
import { VesselLicenseBanksController } from './vessel-license-banks.controller';
import { VesselLicenseBanksEntity } from './vessel-license-banks.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseBanksEntity])],
  providers: [VesselLicenseBanksService],
  controllers: [VesselLicenseBanksController],
  exports: [VesselLicenseBanksService],
})
export class VesselLicenseBanksModule {}