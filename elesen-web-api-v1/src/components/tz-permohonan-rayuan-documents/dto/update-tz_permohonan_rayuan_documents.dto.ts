import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPermohonanRayuanDocumentsDto } from './create-tz_permohonan_rayuan_documents.dto';

export class UpdateTzPermohonanRayuanDocumentsDto extends PartialType(CreateTzPermohonanRayuanDocumentsDto) {}