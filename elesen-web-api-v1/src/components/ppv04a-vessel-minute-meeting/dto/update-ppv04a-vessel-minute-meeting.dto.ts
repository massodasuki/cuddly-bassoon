import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselMinuteMeetingDto } from './create-ppv04a-vessel-minute-meeting.dto';

export class UpdatePpv04aVesselMinuteMeetingDto extends PartialType(CreatePpv04aVesselMinuteMeetingDto) {}