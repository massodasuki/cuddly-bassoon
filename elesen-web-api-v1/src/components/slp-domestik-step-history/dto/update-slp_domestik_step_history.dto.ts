import { PartialType } from '@nestjs/mapped-types';
import { CreateSlpDomestikStepHistoryDto } from './create-slp_domestik_step_history.dto';

export class UpdateSlpDomestikStepHistoryDto extends PartialType(CreateSlpDomestikStepHistoryDto) {}