import { PartialType } from '@nestjs/mapped-types';
import { CreateCauseLetterAttachmentsDto } from './create-cause-letter-attachments.dto';

export class UpdateCauseLetterAttachmentsDto extends PartialType(CreateCauseLetterAttachmentsDto) {}