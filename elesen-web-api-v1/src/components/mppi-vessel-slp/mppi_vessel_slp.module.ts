import { Module } from '@nestjs/common';
import { MppiVesselSlpService } from './mppi_vessel_slp.service';
import { MppiVesselSlpController } from './mppi_vessel_slp.controller';
import { MppiVesselSlpEntity } from './mppi_vessel_slp.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselSlpEntity])],
  providers: [MppiVesselSlpService],
  controllers: [MppiVesselSlpController],
  exports: [MppiVesselSlpService],
})
export class MppiVesselSlpModule {}