import { PartialType } from '@nestjs/mapped-types';
import { CreateTzLicensePrintLogsDto } from './create-tz_license_print_logs.dto';

export class UpdateTzLicensePrintLogsDto extends PartialType(CreateTzLicensePrintLogsDto) {}