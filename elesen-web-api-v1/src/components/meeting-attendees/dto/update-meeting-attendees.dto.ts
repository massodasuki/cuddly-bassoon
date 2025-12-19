import { PartialType } from '@nestjs/mapped-types';
import { CreateMeetingAttendeesDto } from './create-meeting-attendees.dto';

export class UpdateMeetingAttendeesDto extends PartialType(CreateMeetingAttendeesDto) {}