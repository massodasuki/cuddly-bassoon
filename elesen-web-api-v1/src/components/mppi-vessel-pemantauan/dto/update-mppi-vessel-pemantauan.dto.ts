import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselPemantauanDto } from './create-mppi-vessel-pemantauan.dto';

export class UpdateMppiVesselPemantauanDto extends PartialType(CreateMppiVesselPemantauanDto) {}