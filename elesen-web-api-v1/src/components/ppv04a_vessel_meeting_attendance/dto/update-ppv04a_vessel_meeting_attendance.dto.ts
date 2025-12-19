import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselMeetingAttendanceDto } from './create-ppv04a_vessel_meeting_attendance.dto';

export class UpdatePpv04aVesselMeetingAttendanceDto extends PartialType(CreatePpv04aVesselMeetingAttendanceDto) {}