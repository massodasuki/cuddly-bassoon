import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselMinuteMeetingDto } from './create-mppi-vessel-minute-meeting.dto';

export class UpdateMppiVesselMinuteMeetingDto extends PartialType(CreateMppiVesselMinuteMeetingDto) {}