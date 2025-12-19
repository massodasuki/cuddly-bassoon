import { Module } from '@nestjs/common';
import { MppiVesselKickoffService } from './mppi_vessel_kickoff.service';
import { MppiVesselKickoffController } from './mppi_vessel_kickoff.controller';
import { MppiVesselKickoffEntity } from './mppi_vessel_kickoff.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselKickoffEntity])],
  providers: [MppiVesselKickoffService],
  controllers: [MppiVesselKickoffController],
  exports: [MppiVesselKickoffService],
})
export class MppiVesselKickoffModule {}