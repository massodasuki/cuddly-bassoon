import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationDocumentsDto } from './create-application_documents.dto';

export class UpdateApplicationDocumentsDto extends PartialType(CreateApplicationDocumentsDto) {}