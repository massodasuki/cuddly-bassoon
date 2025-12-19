import { PartialType } from '@nestjs/mapped-types';
import { CreateTzLicensePrintLogsDto } from './create-tz-license-print-logs.dto';

export class UpdateTzLicensePrintLogsDto extends PartialType(CreateTzLicensePrintLogsDto) {}