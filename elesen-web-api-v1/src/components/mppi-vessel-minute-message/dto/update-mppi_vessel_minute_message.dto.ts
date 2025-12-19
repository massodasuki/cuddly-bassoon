import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselMinuteMessageDto } from './create-mppi_vessel_minute_message.dto';

export class UpdateMppiVesselMinuteMessageDto extends PartialType(CreateMppiVesselMinuteMessageDto) {}