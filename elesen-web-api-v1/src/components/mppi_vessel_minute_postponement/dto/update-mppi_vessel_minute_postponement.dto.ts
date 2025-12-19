import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselMinutePostponementDto } from './create-mppi_vessel_minute_postponement.dto';

export class UpdateMppiVesselMinutePostponementDto extends PartialType(CreateMppiVesselMinutePostponementDto) {}