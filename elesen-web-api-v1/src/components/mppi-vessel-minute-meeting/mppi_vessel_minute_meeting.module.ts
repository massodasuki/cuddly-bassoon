import { Module } from '@nestjs/common';
import { MppiVesselMinuteMeetingService } from './mppi_vessel_minute_meeting.service';
import { MppiVesselMinuteMeetingController } from './mppi_vessel_minute_meeting.controller';
import { MppiVesselMinuteMeetingEntity } from './mppi_vessel_minute_meeting.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselMinuteMeetingEntity])],
  providers: [MppiVesselMinuteMeetingService],
  controllers: [MppiVesselMinuteMeetingController],
  exports: [MppiVesselMinuteMeetingService],
})
export class MppiVesselMinuteMeetingModule {}