import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiSafetyEquipmentsDto } from './create-lpi_safety_equipments.dto';

export class UpdateLpiSafetyEquipmentsDto extends PartialType(CreateLpiSafetyEquipmentsDto) {}