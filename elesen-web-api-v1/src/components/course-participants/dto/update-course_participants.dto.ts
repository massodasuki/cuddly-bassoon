import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseParticipantsDto } from './create-course_participants.dto';

export class UpdateCourseParticipantsDto extends PartialType(CreateCourseParticipantsDto) {}