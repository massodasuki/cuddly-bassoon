import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiFishingEquipmentsDto } from './create-lpi_fishing_equipments.dto';

export class UpdateLpiFishingEquipmentsDto extends PartialType(CreateLpiFishingEquipmentsDto) {}