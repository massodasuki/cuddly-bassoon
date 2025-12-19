import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bInspectionReportTwoDto } from './create-ppv04b-inspection-report-two.dto';

export class UpdatePpv04bInspectionReportTwoDto extends PartialType(CreatePpv04bInspectionReportTwoDto) {}