import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiInlandFishingEquipmentItemsDto } from './create-lpi-inland-fishing-equipment-items.dto';

export class UpdateLpiInlandFishingEquipmentItemsDto extends PartialType(CreateLpiInlandFishingEquipmentItemsDto) {}