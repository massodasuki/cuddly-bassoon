import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bInspectionReportTwoDto } from './create-ppv04b_inspection_report_two.dto';

export class UpdatePpv04bInspectionReportTwoDto extends PartialType(CreatePpv04bInspectionReportTwoDto) {}