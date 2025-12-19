import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationSupportDocumentDto } from './create-application-support-document.dto';

export class UpdateApplicationSupportDocumentDto extends PartialType(CreateApplicationSupportDocumentDto) {}