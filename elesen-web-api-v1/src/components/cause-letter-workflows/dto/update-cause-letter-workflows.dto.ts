import { PartialType } from '@nestjs/mapped-types';
import { CreateCauseLetterWorkflowsDto } from './create-cause-letter-workflows.dto';

export class UpdateCauseLetterWorkflowsDto extends PartialType(CreateCauseLetterWorkflowsDto) {}