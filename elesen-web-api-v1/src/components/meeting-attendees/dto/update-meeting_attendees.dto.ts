import { PartialType } from '@nestjs/mapped-types';
import { CreateMeetingAttendeesDto } from './create-meeting_attendees.dto';

export class UpdateMeetingAttendeesDto extends PartialType(CreateMeetingAttendeesDto) {}