import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselExtraFileDto } from './create-mppi_vessel_extra_file.dto';

export class UpdateMppiVesselExtraFileDto extends PartialType(CreateMppiVesselExtraFileDto) {}