import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselLaporanDto } from './create-ppv04a-vessel-laporan.dto';

export class UpdatePpv04aVesselLaporanDto extends PartialType(CreatePpv04aVesselLaporanDto) {}