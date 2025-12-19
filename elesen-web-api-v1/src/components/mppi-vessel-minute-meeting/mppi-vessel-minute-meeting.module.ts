import { Module } from '@nestjs/common';
import { MppiVesselMinuteMeetingService } from './mppi-vessel-minute-meeting.service';
import { MppiVesselMinuteMeetingController } from './mppi-vessel-minute-meeting.controller';
import { MppiVesselMinuteMeetingEntity } from './mppi-vessel-minute-meeting.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselMinuteMeetingEntity])],
  providers: [MppiVesselMinuteMeetingService],
  controllers: [MppiVesselMinuteMeetingController],
  exports: [MppiVesselMinuteMeetingService],
})
export class MppiVesselMinuteMeetingModule {}