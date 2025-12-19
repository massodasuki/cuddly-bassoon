import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiInlandFishingEquipmentsDto } from './create-lpi_inland_fishing_equipments.dto';

export class UpdateLpiInlandFishingEquipmentsDto extends PartialType(CreateLpiInlandFishingEquipmentsDto) {}