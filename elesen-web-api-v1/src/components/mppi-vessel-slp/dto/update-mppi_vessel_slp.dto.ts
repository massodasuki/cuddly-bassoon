import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselSlpDto } from './create-mppi_vessel_slp.dto';

export class UpdateMppiVesselSlpDto extends PartialType(CreateMppiVesselSlpDto) {}