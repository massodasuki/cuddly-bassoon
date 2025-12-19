import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiInspectionItemsDto } from './create-lpi-inspection-items.dto';

export class UpdateLpiInspectionItemsDto extends PartialType(CreateLpiInspectionItemsDto) {}