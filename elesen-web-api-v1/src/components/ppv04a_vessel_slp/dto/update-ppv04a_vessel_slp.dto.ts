import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselSlpDto } from './create-ppv04a_vessel_slp.dto';

export class UpdatePpv04aVesselSlpDto extends PartialType(CreatePpv04aVesselSlpDto) {}