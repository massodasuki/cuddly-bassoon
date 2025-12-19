import { PartialType } from '@nestjs/mapped-types';
import { CreateRefCauseLetterWorkflowsDto } from './create-ref-cause-letter-workflows.dto';

export class UpdateRefCauseLetterWorkflowsDto extends PartialType(CreateRefCauseLetterWorkflowsDto) {}