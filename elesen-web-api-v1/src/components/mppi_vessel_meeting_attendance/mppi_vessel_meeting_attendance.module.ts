import { Module } from '@nestjs/common';
import { MppiVesselMeetingAttendanceService } from './mppi_vessel_meeting_attendance.service';
import { MppiVesselMeetingAttendanceController } from './mppi_vessel_meeting_attendance.controller';
import { MppiVesselMeetingAttendanceEntity } from './mppi_vessel_meeting_attendance.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselMeetingAttendanceEntity])],
  providers: [MppiVesselMeetingAttendanceService],
  controllers: [MppiVesselMeetingAttendanceController],
  exports: [MppiVesselMeetingAttendanceService],
})
export class MppiVesselMeetingAttendanceModule {}