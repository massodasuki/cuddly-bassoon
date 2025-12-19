import { PartialType } from '@nestjs/mapped-types';
import { CreateCauseLetterCommentsDto } from './create-cause_letter_comments.dto';

export class UpdateCauseLetterCommentsDto extends PartialType(CreateCauseLetterCommentsDto) {}