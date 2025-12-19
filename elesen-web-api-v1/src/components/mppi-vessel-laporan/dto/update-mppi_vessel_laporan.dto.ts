import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselLaporanDto } from './create-mppi_vessel_laporan.dto';

export class UpdateMppiVesselLaporanDto extends PartialType(CreateMppiVesselLaporanDto) {}