import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bCheckDocumentTwoDto } from './create-ppv04b-check-document-two.dto';

export class UpdatePpv04bCheckDocumentTwoDto extends PartialType(CreatePpv04bCheckDocumentTwoDto) {}