import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiSafetyEquipmentsDto } from './create-lpi-safety-equipments.dto';

export class UpdateLpiSafetyEquipmentsDto extends PartialType(CreateLpiSafetyEquipmentsDto) {}