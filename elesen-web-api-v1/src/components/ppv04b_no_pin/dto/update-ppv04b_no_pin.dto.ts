import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bNoPinDto } from './create-ppv04b_no_pin.dto';

export class UpdatePpv04bNoPinDto extends PartialType(CreatePpv04bNoPinDto) {}