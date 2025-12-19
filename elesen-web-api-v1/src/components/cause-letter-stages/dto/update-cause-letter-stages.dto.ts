import { PartialType } from '@nestjs/mapped-types';
import { CreateCauseLetterStagesDto } from './create-cause-letter-stages.dto';

export class UpdateCauseLetterStagesDto extends PartialType(CreateCauseLetterStagesDto) {}