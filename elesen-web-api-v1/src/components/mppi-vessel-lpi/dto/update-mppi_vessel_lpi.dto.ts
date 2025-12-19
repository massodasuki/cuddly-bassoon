import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselLpiDto } from './create-mppi_vessel_lpi.dto';

export class UpdateMppiVesselLpiDto extends PartialType(CreateMppiVesselLpiDto) {}