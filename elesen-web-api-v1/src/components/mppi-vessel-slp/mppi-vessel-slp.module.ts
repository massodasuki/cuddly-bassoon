import { Module } from '@nestjs/common';
import { MppiVesselSlpService } from './mppi-vessel-slp.service';
import { MppiVesselSlpController } from './mppi-vessel-slp.controller';
import { MppiVesselSlpEntity } from './mppi-vessel-slp.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselSlpEntity])],
  providers: [MppiVesselSlpService],
  controllers: [MppiVesselSlpController],
  exports: [MppiVesselSlpService],
})
export class MppiVesselSlpModule {}