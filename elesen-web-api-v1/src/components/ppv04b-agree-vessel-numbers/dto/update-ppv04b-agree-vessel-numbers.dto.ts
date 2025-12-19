import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bAgreeVesselNumbersDto } from './create-ppv04b-agree-vessel-numbers.dto';

export class UpdatePpv04bAgreeVesselNumbersDto extends PartialType(CreatePpv04bAgreeVesselNumbersDto) {}