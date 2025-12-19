import { PartialType } from '@nestjs/mapped-types';
import { CreateSlpDomestikStepHistoryDto } from './create-slp-domestik-step-history.dto';

export class UpdateSlpDomestikStepHistoryDto extends PartialType(CreateSlpDomestikStepHistoryDto) {}