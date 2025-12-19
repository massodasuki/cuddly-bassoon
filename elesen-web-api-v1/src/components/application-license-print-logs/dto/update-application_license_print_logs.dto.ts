import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationLicensePrintLogsDto } from './create-application_license_print_logs.dto';

export class UpdateApplicationLicensePrintLogsDto extends PartialType(CreateApplicationLicensePrintLogsDto) {}