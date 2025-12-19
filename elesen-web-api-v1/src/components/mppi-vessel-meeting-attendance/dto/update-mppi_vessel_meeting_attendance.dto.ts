import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselMeetingAttendanceDto } from './create-mppi_vessel_meeting_attendance.dto';

export class UpdateMppiVesselMeetingAttendanceDto extends PartialType(CreateMppiVesselMeetingAttendanceDto) {}