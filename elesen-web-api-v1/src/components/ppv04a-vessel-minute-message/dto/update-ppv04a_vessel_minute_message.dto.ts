import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselMinuteMessageDto } from './create-ppv04a_vessel_minute_message.dto';

export class UpdatePpv04aVesselMinuteMessageDto extends PartialType(CreatePpv04aVesselMinuteMessageDto) {}