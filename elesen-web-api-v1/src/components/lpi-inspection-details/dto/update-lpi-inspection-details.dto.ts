import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiInspectionDetailsDto } from './create-lpi-inspection-details.dto';

export class UpdateLpiInspectionDetailsDto extends PartialType(CreateLpiInspectionDetailsDto) {}