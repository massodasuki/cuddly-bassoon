import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselViolationsDto } from './create-vessel-violations.dto';

export class UpdateVesselViolationsDto extends PartialType(CreateVesselViolationsDto) {}