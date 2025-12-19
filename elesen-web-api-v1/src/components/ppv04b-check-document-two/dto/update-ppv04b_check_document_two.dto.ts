import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bCheckDocumentTwoDto } from './create-ppv04b_check_document_two.dto';

export class UpdatePpv04bCheckDocumentTwoDto extends PartialType(CreatePpv04bCheckDocumentTwoDto) {}