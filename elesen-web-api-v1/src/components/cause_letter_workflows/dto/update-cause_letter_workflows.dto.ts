import { PartialType } from '@nestjs/mapped-types';
import { CreateCauseLetterWorkflowsDto } from './create-cause_letter_workflows.dto';

export class UpdateCauseLetterWorkflowsDto extends PartialType(CreateCauseLetterWorkflowsDto) {}