import { PartialType } from '@nestjs/swagger';
import { CreateVesselDto } from './create-vessel-api.dto';

export class UpdateVesselDto extends PartialType(CreateVesselDto) {}

