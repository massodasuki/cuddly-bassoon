import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselMinutePostponementDto } from './create-ppv04a-vessel-minute-postponement.dto';

export class UpdatePpv04aVesselMinutePostponementDto extends PartialType(CreatePpv04aVesselMinutePostponementDto) {}