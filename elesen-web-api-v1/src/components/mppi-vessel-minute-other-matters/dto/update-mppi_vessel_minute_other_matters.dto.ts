import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselMinuteOtherMattersDto } from './create-mppi_vessel_minute_other_matters.dto';

export class UpdateMppiVesselMinuteOtherMattersDto extends PartialType(CreateMppiVesselMinuteOtherMattersDto) {}