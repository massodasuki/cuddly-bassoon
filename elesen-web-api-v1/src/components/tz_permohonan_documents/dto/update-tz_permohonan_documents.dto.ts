import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPermohonanDocumentsDto } from './create-tz_permohonan_documents.dto';

export class UpdateTzPermohonanDocumentsDto extends PartialType(CreateTzPermohonanDocumentsDto) {}