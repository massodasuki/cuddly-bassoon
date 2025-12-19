import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPermohonanInspectionAssignmentsDto } from './create-tz_permohonan_inspection_assignments.dto';

export class UpdateTzPermohonanInspectionAssignmentsDto extends PartialType(CreateTzPermohonanInspectionAssignmentsDto) {}