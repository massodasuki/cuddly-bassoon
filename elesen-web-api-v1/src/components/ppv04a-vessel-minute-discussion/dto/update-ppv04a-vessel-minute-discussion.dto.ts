import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselMinuteDiscussionDto } from './create-ppv04a-vessel-minute-discussion.dto';

export class UpdatePpv04aVesselMinuteDiscussionDto extends PartialType(CreatePpv04aVesselMinuteDiscussionDto) {}