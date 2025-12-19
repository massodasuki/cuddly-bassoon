import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bInspectionLpiDto } from './create-ppv04b-inspection-lpi.dto';

export class UpdatePpv04bInspectionLpiDto extends PartialType(CreatePpv04bInspectionLpiDto) {}