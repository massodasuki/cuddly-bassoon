import { PartialType } from '@nestjs/mapped-types';
import { CreateBaseTransferDocsDto } from './create-base-transfer-docs.dto';

export class UpdateBaseTransferDocsDto extends PartialType(CreateBaseTransferDocsDto) {}