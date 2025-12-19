import { PartialType } from '@nestjs/mapped-types';
import { CreateFullInspectionLpisDto } from './create-full_inspection_lpis.dto';

export class UpdateFullInspectionLpisDto extends PartialType(CreateFullInspectionLpisDto) {}