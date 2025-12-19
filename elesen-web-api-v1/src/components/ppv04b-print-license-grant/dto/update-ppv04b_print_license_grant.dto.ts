import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bPrintLicenseGrantDto } from './create-ppv04b_print_license_grant.dto';

export class UpdatePpv04bPrintLicenseGrantDto extends PartialType(CreatePpv04bPrintLicenseGrantDto) {}