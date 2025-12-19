import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPermohonanInspectionsDto } from './create-tz-permohonan-inspections.dto';

export class UpdateTzPermohonanInspectionsDto extends PartialType(CreateTzPermohonanInspectionsDto) {}