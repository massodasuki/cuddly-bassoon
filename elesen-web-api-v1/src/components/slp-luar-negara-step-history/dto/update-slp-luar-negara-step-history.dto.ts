import { PartialType } from '@nestjs/mapped-types';
import { CreateSlpLuarNegaraStepHistoryDto } from './create-slp-luar-negara-step-history.dto';

export class UpdateSlpLuarNegaraStepHistoryDto extends PartialType(CreateSlpLuarNegaraStepHistoryDto) {}