import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiSailingEquipmentsDto } from './create-lpi_sailing_equipments.dto';

export class UpdateLpiSailingEquipmentsDto extends PartialType(CreateLpiSailingEquipmentsDto) {}