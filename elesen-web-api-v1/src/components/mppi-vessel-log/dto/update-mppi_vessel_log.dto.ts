import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselLogDto } from './create-mppi_vessel_log.dto';

export class UpdateMppiVesselLogDto extends PartialType(CreateMppiVesselLogDto) {}