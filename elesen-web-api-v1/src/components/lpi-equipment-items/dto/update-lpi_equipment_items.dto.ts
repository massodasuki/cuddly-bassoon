import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiEquipmentItemsDto } from './create-lpi_equipment_items.dto';

export class UpdateLpiEquipmentItemsDto extends PartialType(CreateLpiEquipmentItemsDto) {}