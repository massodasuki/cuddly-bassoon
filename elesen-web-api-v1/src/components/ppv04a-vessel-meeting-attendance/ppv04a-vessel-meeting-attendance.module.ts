import { Module } from '@nestjs/common';
import { Ppv04aVesselMeetingAttendanceService } from './ppv04a-vessel-meeting-attendance.service';
import { Ppv04aVesselMeetingAttendanceController } from './ppv04a-vessel-meeting-attendance.controller';
import { Ppv04aVesselMeetingAttendanceEntity } from './ppv04a-vessel-meeting-attendance.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselMeetingAttendanceEntity])],
  providers: [Ppv04aVesselMeetingAttendanceService],
  controllers: [Ppv04aVesselMeetingAttendanceController],
  exports: [Ppv04aVesselMeetingAttendanceService],
})
export class Ppv04aVesselMeetingAttendanceModule {}