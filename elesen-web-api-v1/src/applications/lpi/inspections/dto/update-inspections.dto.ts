import { PartialType } from '@nestjs/mapped-types';
import { CreateInspectionsDto } from './create-inspections.dto';

export class UpdateInspectionsDto extends PartialType(CreateInspectionsDto) {}