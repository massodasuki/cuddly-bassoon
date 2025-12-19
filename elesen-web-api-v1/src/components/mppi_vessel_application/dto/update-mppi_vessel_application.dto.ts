import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselApplicationDto } from './create-mppi_vessel_application.dto';

export class UpdateMppiVesselApplicationDto extends PartialType(CreateMppiVesselApplicationDto) {}