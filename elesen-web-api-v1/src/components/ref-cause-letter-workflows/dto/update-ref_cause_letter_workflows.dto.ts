import { PartialType } from '@nestjs/mapped-types';
import { CreateRefCauseLetterWorkflowsDto } from './create-ref_cause_letter_workflows.dto';

export class UpdateRefCauseLetterWorkflowsDto extends PartialType(CreateRefCauseLetterWorkflowsDto) {}