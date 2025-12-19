import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselMinuteMessageDto } from './create-mppi-vessel-minute-message.dto';

export class UpdateMppiVesselMinuteMessageDto extends PartialType(CreateMppiVesselMinuteMessageDto) {}