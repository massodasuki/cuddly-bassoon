import { Module } from '@nestjs/common';
import { Ppv04aVesselMinuteMeetingService } from './ppv04a-vessel-minute-meeting.service';
import { Ppv04aVesselMinuteMeetingController } from './ppv04a-vessel-minute-meeting.controller';
import { Ppv04aVesselMinuteMeetingEntity } from './ppv04a-vessel-minute-meeting.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselMinuteMeetingEntity])],
  providers: [Ppv04aVesselMinuteMeetingService],
  controllers: [Ppv04aVesselMinuteMeetingController],
  exports: [Ppv04aVesselMinuteMeetingService],
})
export class Ppv04aVesselMinuteMeetingModule {}