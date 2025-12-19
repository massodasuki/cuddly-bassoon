import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselRegisteredDto } from './create-vessel_registered.dto';

export class UpdateVesselRegisteredDto extends PartialType(CreateVesselRegisteredDto) {}