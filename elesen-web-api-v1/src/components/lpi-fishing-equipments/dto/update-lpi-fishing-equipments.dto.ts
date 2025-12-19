import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiFishingEquipmentsDto } from './create-lpi-fishing-equipments.dto';

export class UpdateLpiFishingEquipmentsDto extends PartialType(CreateLpiFishingEquipmentsDto) {}