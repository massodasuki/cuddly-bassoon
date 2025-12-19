import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselMinutePostponementDto } from './create-mppi-vessel-minute-postponement.dto';

export class UpdateMppiVesselMinutePostponementDto extends PartialType(CreateMppiVesselMinutePostponementDto) {}