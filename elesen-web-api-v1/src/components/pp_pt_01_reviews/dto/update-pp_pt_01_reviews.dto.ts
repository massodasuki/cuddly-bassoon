import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPt01ReviewsDto } from './create-pp_pt_01_reviews.dto';

export class UpdatePpPt01ReviewsDto extends PartialType(CreatePpPt01ReviewsDto) {}