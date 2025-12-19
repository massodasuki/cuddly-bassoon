import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bCheckGaDocumentDto } from './create-ppv04b-check-ga-document.dto';

export class UpdatePpv04bCheckGaDocumentDto extends PartialType(CreatePpv04bCheckGaDocumentDto) {}