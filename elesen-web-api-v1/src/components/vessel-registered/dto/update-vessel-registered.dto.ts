import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselRegisteredDto } from './create-vessel-registered.dto';

export class UpdateVesselRegisteredDto extends PartialType(CreateVesselRegisteredDto) {}