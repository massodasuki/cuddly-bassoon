import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselLpiPeralatanDto } from './create-mppi_vessel_lpi_peralatan.dto';

export class UpdateMppiVesselLpiPeralatanDto extends PartialType(CreateMppiVesselLpiPeralatanDto) {}