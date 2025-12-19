import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bCheckDocumentDto } from './create-ppv04b_check_document.dto';

export class UpdatePpv04bCheckDocumentDto extends PartialType(CreatePpv04bCheckDocumentDto) {}