import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselKickoffDto } from './create-mppi_vessel_kickoff.dto';

export class UpdateMppiVesselKickoffDto extends PartialType(CreateMppiVesselKickoffDto) {}