import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiInlandFishingEquipmentsDto } from './create-lpi-inland-fishing-equipments.dto';

export class UpdateLpiInlandFishingEquipmentsDto extends PartialType(CreateLpiInlandFishingEquipmentsDto) {}