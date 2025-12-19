import { PartialType } from '@nestjs/mapped-types';
import { CreateSlpLuarNegaraStepHistoryDto } from './create-slp_luar_negara_step_history.dto';

export class UpdateSlpLuarNegaraStepHistoryDto extends PartialType(CreateSlpLuarNegaraStepHistoryDto) {}