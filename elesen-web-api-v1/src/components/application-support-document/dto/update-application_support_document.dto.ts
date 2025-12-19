import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationSupportDocumentDto } from './create-application_support_document.dto';

export class UpdateApplicationSupportDocumentDto extends PartialType(CreateApplicationSupportDocumentDto) {}