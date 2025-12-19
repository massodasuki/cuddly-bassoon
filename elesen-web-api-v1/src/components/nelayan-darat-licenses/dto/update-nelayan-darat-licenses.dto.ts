import { PartialType } from '@nestjs/mapped-types';
import { CreateNelayanDaratLicensesDto } from './create-nelayan-darat-licenses.dto';

export class UpdateNelayanDaratLicensesDto extends PartialType(CreateNelayanDaratLicensesDto) {}