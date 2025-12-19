import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiSailingEquipmentsDto } from './create-lpi-sailing-equipments.dto';

export class UpdateLpiSailingEquipmentsDto extends PartialType(CreateLpiSailingEquipmentsDto) {}