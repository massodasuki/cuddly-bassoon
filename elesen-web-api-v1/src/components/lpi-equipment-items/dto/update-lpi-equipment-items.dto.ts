import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiEquipmentItemsDto } from './create-lpi-equipment-items.dto';

export class UpdateLpiEquipmentItemsDto extends PartialType(CreateLpiEquipmentItemsDto) {}