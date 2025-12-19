import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselMinuteDiscussionDto } from './create-ppv04a_vessel_minute_discussion.dto';

export class UpdatePpv04aVesselMinuteDiscussionDto extends PartialType(CreatePpv04aVesselMinuteDiscussionDto) {}