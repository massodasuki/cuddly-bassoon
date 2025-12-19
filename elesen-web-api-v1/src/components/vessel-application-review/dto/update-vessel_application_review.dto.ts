import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselApplicationReviewDto } from './create-vessel_application_review.dto';

export class UpdateVesselApplicationReviewDto extends PartialType(CreateVesselApplicationReviewDto) {}