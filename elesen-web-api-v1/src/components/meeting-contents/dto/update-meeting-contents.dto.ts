import { PartialType } from '@nestjs/mapped-types';
import { CreateMeetingContentsDto } from './create-meeting-contents.dto';

export class UpdateMeetingContentsDto extends PartialType(CreateMeetingContentsDto) {}