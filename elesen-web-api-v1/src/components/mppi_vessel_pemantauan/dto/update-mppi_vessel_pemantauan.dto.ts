import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselPemantauanDto } from './create-mppi_vessel_pemantauan.dto';

export class UpdateMppiVesselPemantauanDto extends PartialType(CreateMppiVesselPemantauanDto) {}