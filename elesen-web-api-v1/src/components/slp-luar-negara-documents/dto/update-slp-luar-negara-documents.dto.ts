import { PartialType } from '@nestjs/mapped-types';
import { CreateSlpLuarNegaraDocumentsDto } from './create-slp-luar-negara-documents.dto';

export class UpdateSlpLuarNegaraDocumentsDto extends PartialType(CreateSlpLuarNegaraDocumentsDto) {}