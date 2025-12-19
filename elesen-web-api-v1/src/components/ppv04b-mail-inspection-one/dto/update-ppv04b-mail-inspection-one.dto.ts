import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bMailInspectionOneDto } from './create-ppv04b-mail-inspection-one.dto';

export class UpdatePpv04bMailInspectionOneDto extends PartialType(CreatePpv04bMailInspectionOneDto) {}