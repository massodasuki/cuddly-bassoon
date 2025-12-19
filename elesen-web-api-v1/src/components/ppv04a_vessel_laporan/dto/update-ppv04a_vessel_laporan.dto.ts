import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselLaporanDto } from './create-ppv04a_vessel_laporan.dto';

export class UpdatePpv04aVesselLaporanDto extends PartialType(CreatePpv04aVesselLaporanDto) {}