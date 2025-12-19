import { PartialType } from '@nestjs/mapped-types';
import { CreateFishingEquipmentLpisDto } from './create-fishing_equipment_lpis.dto';

export class UpdateFishingEquipmentLpisDto extends PartialType(CreateFishingEquipmentLpisDto) {}