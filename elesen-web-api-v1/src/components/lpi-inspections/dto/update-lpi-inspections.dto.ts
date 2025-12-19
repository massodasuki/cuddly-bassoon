import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiInspectionsDto } from './create-lpi-inspections.dto';

export class UpdateLpiInspectionsDto extends PartialType(CreateLpiInspectionsDto) {}