import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiInspectionItemsDto } from './create-lpi_inspection_items.dto';

export class UpdateLpiInspectionItemsDto extends PartialType(CreateLpiInspectionItemsDto) {}