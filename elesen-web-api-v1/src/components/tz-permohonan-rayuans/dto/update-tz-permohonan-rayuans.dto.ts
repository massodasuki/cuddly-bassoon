import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPermohonanRayuansDto } from './create-tz-permohonan-rayuans.dto';

export class UpdateTzPermohonanRayuansDto extends PartialType(CreateTzPermohonanRayuansDto) {}