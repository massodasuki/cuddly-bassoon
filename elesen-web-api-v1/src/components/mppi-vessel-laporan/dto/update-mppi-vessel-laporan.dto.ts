import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselLaporanDto } from './create-mppi-vessel-laporan.dto';

export class UpdateMppiVesselLaporanDto extends PartialType(CreateMppiVesselLaporanDto) {}