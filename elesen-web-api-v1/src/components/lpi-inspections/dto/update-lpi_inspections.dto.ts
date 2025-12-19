import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiInspectionsDto } from './create-lpi_inspections.dto';

export class UpdateLpiInspectionsDto extends PartialType(CreateLpiInspectionsDto) {}