import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselAtfsDto } from './create-vessel-atfs.dto';

export class UpdateVesselAtfsDto extends PartialType(CreateVesselAtfsDto) {}