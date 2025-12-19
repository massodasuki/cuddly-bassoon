import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselMeetingAttendanceDto } from './create-mppi-vessel-meeting-attendance.dto';

export class UpdateMppiVesselMeetingAttendanceDto extends PartialType(CreateMppiVesselMeetingAttendanceDto) {}