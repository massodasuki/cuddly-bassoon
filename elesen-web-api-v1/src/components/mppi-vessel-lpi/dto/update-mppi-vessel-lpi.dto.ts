import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselLpiDto } from './create-mppi-vessel-lpi.dto';

export class UpdateMppiVesselLpiDto extends PartialType(CreateMppiVesselLpiDto) {}