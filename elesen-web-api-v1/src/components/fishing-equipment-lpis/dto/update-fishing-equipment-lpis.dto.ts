import { PartialType } from '@nestjs/mapped-types';
import { CreateFishingEquipmentLpisDto } from './create-fishing-equipment-lpis.dto';

export class UpdateFishingEquipmentLpisDto extends PartialType(CreateFishingEquipmentLpisDto) {}