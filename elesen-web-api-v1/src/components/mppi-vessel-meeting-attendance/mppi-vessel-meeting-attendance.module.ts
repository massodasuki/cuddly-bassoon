import { Module } from '@nestjs/common';
import { MppiVesselMeetingAttendanceService } from './mppi-vessel-meeting-attendance.service';
import { MppiVesselMeetingAttendanceController } from './mppi-vessel-meeting-attendance.controller';
import { MppiVesselMeetingAttendanceEntity } from './mppi-vessel-meeting-attendance.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselMeetingAttendanceEntity])],
  providers: [MppiVesselMeetingAttendanceService],
  controllers: [MppiVesselMeetingAttendanceController],
  exports: [MppiVesselMeetingAttendanceService],
})
export class MppiVesselMeetingAttendanceModule {}