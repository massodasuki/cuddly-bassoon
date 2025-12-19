import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselMinuteMessageDto } from './create-ppv04a-vessel-minute-message.dto';

export class UpdatePpv04aVesselMinuteMessageDto extends PartialType(CreatePpv04aVesselMinuteMessageDto) {}