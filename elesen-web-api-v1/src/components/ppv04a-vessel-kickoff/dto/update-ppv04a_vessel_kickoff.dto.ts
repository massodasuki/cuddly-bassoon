import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselKickoffDto } from './create-ppv04a_vessel_kickoff.dto';

export class UpdatePpv04aVesselKickoffDto extends PartialType(CreatePpv04aVesselKickoffDto) {}