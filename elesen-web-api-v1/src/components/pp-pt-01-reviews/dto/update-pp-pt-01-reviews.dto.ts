import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPt01ReviewsDto } from './create-pp-pt-01-reviews.dto';

export class UpdatePpPt01ReviewsDto extends PartialType(CreatePpPt01ReviewsDto) {}