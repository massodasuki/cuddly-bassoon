import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationLicensePrintLogsDto } from './create-application-license-print-logs.dto';

export class UpdateApplicationLicensePrintLogsDto extends PartialType(CreateApplicationLicensePrintLogsDto) {}