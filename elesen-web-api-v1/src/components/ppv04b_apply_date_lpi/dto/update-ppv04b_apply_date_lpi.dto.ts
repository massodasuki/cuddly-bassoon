import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bApplyDateLpiDto } from './create-ppv04b_apply_date_lpi.dto';

export class UpdatePpv04bApplyDateLpiDto extends PartialType(CreatePpv04bApplyDateLpiDto) {}