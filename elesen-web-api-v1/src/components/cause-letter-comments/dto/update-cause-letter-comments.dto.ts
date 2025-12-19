import { PartialType } from '@nestjs/mapped-types';
import { CreateCauseLetterCommentsDto } from './create-cause-letter-comments.dto';

export class UpdateCauseLetterCommentsDto extends PartialType(CreateCauseLetterCommentsDto) {}