import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselMinuteOtherMattersDto } from './create-mppi-vessel-minute-other-matters.dto';

export class UpdateMppiVesselMinuteOtherMattersDto extends PartialType(CreateMppiVesselMinuteOtherMattersDto) {}