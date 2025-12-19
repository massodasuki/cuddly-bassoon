import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselSlpDto } from './create-mppi-vessel-slp.dto';

export class UpdateMppiVesselSlpDto extends PartialType(CreateMppiVesselSlpDto) {}