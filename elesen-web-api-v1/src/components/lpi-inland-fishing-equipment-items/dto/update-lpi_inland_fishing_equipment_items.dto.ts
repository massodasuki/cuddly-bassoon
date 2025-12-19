import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiInlandFishingEquipmentItemsDto } from './create-lpi_inland_fishing_equipment_items.dto';

export class UpdateLpiInlandFishingEquipmentItemsDto extends PartialType(CreateLpiInlandFishingEquipmentItemsDto) {}