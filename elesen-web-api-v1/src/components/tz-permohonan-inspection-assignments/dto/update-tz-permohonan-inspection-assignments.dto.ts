import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPermohonanInspectionAssignmentsDto } from './create-tz-permohonan-inspection-assignments.dto';

export class UpdateTzPermohonanInspectionAssignmentsDto extends PartialType(CreateTzPermohonanInspectionAssignmentsDto) {}