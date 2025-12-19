import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bSupportingDocAttachmentsDto } from './create-ppv04b_supporting_doc_attachments.dto';

export class UpdatePpv04bSupportingDocAttachmentsDto extends PartialType(CreatePpv04bSupportingDocAttachmentsDto) {}