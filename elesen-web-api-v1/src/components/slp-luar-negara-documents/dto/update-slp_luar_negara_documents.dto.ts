import { PartialType } from '@nestjs/mapped-types';
import { CreateSlpLuarNegaraDocumentsDto } from './create-slp_luar_negara_documents.dto';

export class UpdateSlpLuarNegaraDocumentsDto extends PartialType(CreateSlpLuarNegaraDocumentsDto) {}