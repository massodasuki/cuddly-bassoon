import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselLpiPeralatanDto } from './create-ppv04a_vessel_lpi_peralatan.dto';

export class UpdatePpv04aVesselLpiPeralatanDto extends PartialType(CreatePpv04aVesselLpiPeralatanDto) {}