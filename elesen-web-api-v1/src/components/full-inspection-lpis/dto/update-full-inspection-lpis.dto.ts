import { PartialType } from '@nestjs/mapped-types';
import { CreateFullInspectionLpisDto } from './create-full-inspection-lpis.dto';

export class UpdateFullInspectionLpisDto extends PartialType(CreateFullInspectionLpisDto) {}