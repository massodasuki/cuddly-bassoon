import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bApplyDatesDto } from './create-ppv04b-apply-dates.dto';

export class UpdatePpv04bApplyDatesDto extends PartialType(CreatePpv04bApplyDatesDto) {}