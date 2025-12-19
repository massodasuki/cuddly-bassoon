import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPermohonanDocumentsDto } from './create-tz-permohonan-documents.dto';

export class UpdateTzPermohonanDocumentsDto extends PartialType(CreateTzPermohonanDocumentsDto) {}