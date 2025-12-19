import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselLpiDto } from './create-ppv04a_vessel_lpi.dto';

export class UpdatePpv04aVesselLpiDto extends PartialType(CreatePpv04aVesselLpiDto) {}