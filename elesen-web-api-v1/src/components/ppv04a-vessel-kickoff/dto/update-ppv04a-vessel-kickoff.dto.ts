import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselKickoffDto } from './create-ppv04a-vessel-kickoff.dto';

export class UpdatePpv04aVesselKickoffDto extends PartialType(CreatePpv04aVesselKickoffDto) {}