import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselMinutePostponementDto } from './create-ppv04a_vessel_minute_postponement.dto';

export class UpdatePpv04aVesselMinutePostponementDto extends PartialType(CreatePpv04aVesselMinutePostponementDto) {}