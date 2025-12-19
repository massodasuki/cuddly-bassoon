import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselMinuteMeetingDto } from './create-ppv04a_vessel_minute_meeting.dto';

export class UpdatePpv04aVesselMinuteMeetingDto extends PartialType(CreatePpv04aVesselMinuteMeetingDto) {}