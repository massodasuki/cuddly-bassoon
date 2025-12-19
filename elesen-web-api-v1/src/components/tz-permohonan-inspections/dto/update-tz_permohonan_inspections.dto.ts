import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPermohonanInspectionsDto } from './create-tz_permohonan_inspections.dto';

export class UpdateTzPermohonanInspectionsDto extends PartialType(CreateTzPermohonanInspectionsDto) {}