import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselArchiveDto } from './create-mppi-vessel-archive.dto';

export class UpdateMppiVesselArchiveDto extends PartialType(CreateMppiVesselArchiveDto) {}