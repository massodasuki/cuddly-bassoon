import { Module } from '@nestjs/common';
import { MppiVesselKickoffService } from './mppi-vessel-kickoff.service';
import { MppiVesselKickoffController } from './mppi-vessel-kickoff.controller';
import { MppiVesselKickoffEntity } from './mppi-vessel-kickoff.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselKickoffEntity])],
  providers: [MppiVesselKickoffService],
  controllers: [MppiVesselKickoffController],
  exports: [MppiVesselKickoffService],
})
export class MppiVesselKickoffModule {}