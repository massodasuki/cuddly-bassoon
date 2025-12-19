import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiInspectionDetailsDto } from './create-lpi_inspection_details.dto';

export class UpdateLpiInspectionDetailsDto extends PartialType(CreateLpiInspectionDetailsDto) {}