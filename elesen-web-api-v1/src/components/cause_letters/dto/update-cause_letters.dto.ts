import { PartialType } from '@nestjs/mapped-types';
import { CreateCauseLettersDto } from './create-cause_letters.dto';

export class UpdateCauseLettersDto extends PartialType(CreateCauseLettersDto) {}