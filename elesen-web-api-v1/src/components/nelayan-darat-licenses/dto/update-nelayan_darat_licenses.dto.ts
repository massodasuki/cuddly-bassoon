import { PartialType } from '@nestjs/mapped-types';
import { CreateNelayanDaratLicensesDto } from './create-nelayan_darat_licenses.dto';

export class UpdateNelayanDaratLicensesDto extends PartialType(CreateNelayanDaratLicensesDto) {}