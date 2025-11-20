import { PartialType } from '@nestjs/mapped-types';
import { CreateCmEquipmentDto } from './create-cm-equipment.dto';

export class UpdateCmEquipmentDto extends PartialType(CreateCmEquipmentDto) {}