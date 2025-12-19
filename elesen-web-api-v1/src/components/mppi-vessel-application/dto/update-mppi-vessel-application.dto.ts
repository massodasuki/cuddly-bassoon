import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselApplicationDto } from './create-mppi-vessel-application.dto';

export class UpdateMppiVesselApplicationDto extends PartialType(CreateMppiVesselApplicationDto) {}