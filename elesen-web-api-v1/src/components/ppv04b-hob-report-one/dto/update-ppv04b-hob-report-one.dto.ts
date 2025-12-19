import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bHobReportOneDto } from './create-ppv04b-hob-report-one.dto';

export class UpdatePpv04bHobReportOneDto extends PartialType(CreatePpv04bHobReportOneDto) {}