import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bInspectionReportOneDto } from './create-ppv04b-inspection-report-one.dto';

export class UpdatePpv04bInspectionReportOneDto extends PartialType(CreatePpv04bInspectionReportOneDto) {}