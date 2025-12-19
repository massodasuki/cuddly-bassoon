import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselMinuteDiscussionDto } from './create-mppi-vessel-minute-discussion.dto';

export class UpdateMppiVesselMinuteDiscussionDto extends PartialType(CreateMppiVesselMinuteDiscussionDto) {}