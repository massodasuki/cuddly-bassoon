import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselLogDto } from './create-mppi-vessel-log.dto';

export class UpdateMppiVesselLogDto extends PartialType(CreateMppiVesselLogDto) {}