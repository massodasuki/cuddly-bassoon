import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bAgreeVesselNumbersDto } from './create-ppv04b_agree_vessel_numbers.dto';

export class UpdatePpv04bAgreeVesselNumbersDto extends PartialType(CreatePpv04bAgreeVesselNumbersDto) {}