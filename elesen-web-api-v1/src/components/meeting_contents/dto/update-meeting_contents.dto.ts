import { PartialType } from '@nestjs/mapped-types';
import { CreateMeetingContentsDto } from './create-meeting_contents.dto';

export class UpdateMeetingContentsDto extends PartialType(CreateMeetingContentsDto) {}