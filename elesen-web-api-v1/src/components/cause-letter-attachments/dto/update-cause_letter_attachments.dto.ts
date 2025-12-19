import { PartialType } from '@nestjs/mapped-types';
import { CreateCauseLetterAttachmentsDto } from './create-cause_letter_attachments.dto';

export class UpdateCauseLetterAttachmentsDto extends PartialType(CreateCauseLetterAttachmentsDto) {}