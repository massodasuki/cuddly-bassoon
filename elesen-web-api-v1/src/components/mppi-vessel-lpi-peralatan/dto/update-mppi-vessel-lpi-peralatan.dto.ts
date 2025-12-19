import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselLpiPeralatanDto } from './create-mppi-vessel-lpi-peralatan.dto';

export class UpdateMppiVesselLpiPeralatanDto extends PartialType(CreateMppiVesselLpiPeralatanDto) {}