import { PartialType } from '@nestjs/swagger';
import { CreateFishingActivityDto } from './create-fishing-activity.dto';

export class UpdateFishingActivityDto extends PartialType(CreateFishingActivityDto) {}