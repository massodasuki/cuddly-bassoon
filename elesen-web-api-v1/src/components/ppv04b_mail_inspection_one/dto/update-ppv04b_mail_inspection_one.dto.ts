import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bMailInspectionOneDto } from './create-ppv04b_mail_inspection_one.dto';

export class UpdatePpv04bMailInspectionOneDto extends PartialType(CreatePpv04bMailInspectionOneDto) {}