import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselAtfsDto } from './create-vessel_atfs.dto';

export class UpdateVesselAtfsDto extends PartialType(CreateVesselAtfsDto) {}