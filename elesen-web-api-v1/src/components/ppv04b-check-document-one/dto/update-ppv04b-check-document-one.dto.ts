import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bCheckDocumentOneDto } from './create-ppv04b-check-document-one.dto';

export class UpdatePpv04bCheckDocumentOneDto extends PartialType(CreatePpv04bCheckDocumentOneDto) {}