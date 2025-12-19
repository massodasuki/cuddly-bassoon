import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselMinuteMeetingDto } from './create-mppi_vessel_minute_meeting.dto';

export class UpdateMppiVesselMinuteMeetingDto extends PartialType(CreateMppiVesselMinuteMeetingDto) {}