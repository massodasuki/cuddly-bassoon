import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bSupportingDocAttachmentsDto } from './create-ppv04b-supporting-doc-attachments.dto';

export class UpdatePpv04bSupportingDocAttachmentsDto extends PartialType(CreatePpv04bSupportingDocAttachmentsDto) {}