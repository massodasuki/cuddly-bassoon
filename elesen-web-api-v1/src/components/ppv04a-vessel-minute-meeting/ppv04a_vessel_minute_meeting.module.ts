import { Module } from '@nestjs/common';
import { Ppv04aVesselMinuteMeetingService } from './ppv04a_vessel_minute_meeting.service';
import { Ppv04aVesselMinuteMeetingController } from './ppv04a_vessel_minute_meeting.controller';
import { Ppv04aVesselMinuteMeetingEntity } from './ppv04a_vessel_minute_meeting.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselMinuteMeetingEntity])],
  providers: [Ppv04aVesselMinuteMeetingService],
  controllers: [Ppv04aVesselMinuteMeetingController],
  exports: [Ppv04aVesselMinuteMeetingService],
})
export class Ppv04aVesselMinuteMeetingModule {}