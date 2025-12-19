import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselEquipmentsDto } from './create-vessel_equipments.dto';

export class UpdateVesselEquipmentsDto extends PartialType(CreateVesselEquipmentsDto) {}