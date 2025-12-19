import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselApplicationReviewDto } from './create-vessel-application-review.dto';

export class UpdateVesselApplicationReviewDto extends PartialType(CreateVesselApplicationReviewDto) {}