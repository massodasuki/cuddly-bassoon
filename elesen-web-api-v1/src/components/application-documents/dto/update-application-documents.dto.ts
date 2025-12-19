import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationDocumentsDto } from './create-application-documents.dto';

export class UpdateApplicationDocumentsDto extends PartialType(CreateApplicationDocumentsDto) {}