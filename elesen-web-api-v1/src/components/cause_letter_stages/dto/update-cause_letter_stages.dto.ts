import { PartialType } from '@nestjs/mapped-types';
import { CreateCauseLetterStagesDto } from './create-cause_letter_stages.dto';

export class UpdateCauseLetterStagesDto extends PartialType(CreateCauseLetterStagesDto) {}