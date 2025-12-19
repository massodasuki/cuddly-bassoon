import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bInspectionLpiDto } from './create-ppv04b_inspection_lpi.dto';

export class UpdatePpv04bInspectionLpiDto extends PartialType(CreatePpv04bInspectionLpiDto) {}