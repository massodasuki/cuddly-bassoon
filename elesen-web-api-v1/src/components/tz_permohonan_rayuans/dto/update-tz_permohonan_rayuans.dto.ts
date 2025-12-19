import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPermohonanRayuansDto } from './create-tz_permohonan_rayuans.dto';

export class UpdateTzPermohonanRayuansDto extends PartialType(CreateTzPermohonanRayuansDto) {}