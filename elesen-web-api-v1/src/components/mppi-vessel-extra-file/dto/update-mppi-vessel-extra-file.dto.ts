import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselExtraFileDto } from './create-mppi-vessel-extra-file.dto';

export class UpdateMppiVesselExtraFileDto extends PartialType(CreateMppiVesselExtraFileDto) {}