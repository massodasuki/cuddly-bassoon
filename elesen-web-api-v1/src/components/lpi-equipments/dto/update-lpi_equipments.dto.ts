import { PartialType } from '@nestjs/mapped-types';
import { CreateLpiEquipmentsDto } from './create-lpi_equipments.dto';

export class UpdateLpiEquipmentsDto extends PartialType(CreateLpiEquipmentsDto) {}