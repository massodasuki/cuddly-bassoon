import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bHobReportTwoDto } from './create-ppv04b-hob-report-two.dto';

export class UpdatePpv04bHobReportTwoDto extends PartialType(CreatePpv04bHobReportTwoDto) {}