import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselMinuteDiscussionDto } from './create-mppi_vessel_minute_discussion.dto';

export class UpdateMppiVesselMinuteDiscussionDto extends PartialType(CreateMppiVesselMinuteDiscussionDto) {}