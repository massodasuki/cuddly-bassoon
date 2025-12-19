import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseParticipantsDto } from './create-course-participants.dto';

export class UpdateCourseParticipantsDto extends PartialType(CreateCourseParticipantsDto) {}