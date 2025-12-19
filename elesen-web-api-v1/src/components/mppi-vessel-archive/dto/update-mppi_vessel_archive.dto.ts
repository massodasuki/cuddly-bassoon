import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselArchiveDto } from './create-mppi_vessel_archive.dto';

export class UpdateMppiVesselArchiveDto extends PartialType(CreateMppiVesselArchiveDto) {}