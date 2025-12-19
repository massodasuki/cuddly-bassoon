import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselViolationsDto } from './create-vessel_violations.dto';

export class UpdateVesselViolationsDto extends PartialType(CreateVesselViolationsDto) {}