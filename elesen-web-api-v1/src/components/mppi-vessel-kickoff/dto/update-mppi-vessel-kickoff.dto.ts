import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselKickoffDto } from './create-mppi-vessel-kickoff.dto';

export class UpdateMppiVesselKickoffDto extends PartialType(CreateMppiVesselKickoffDto) {}