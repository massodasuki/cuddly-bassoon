import { PartialType } from '@nestjs/mapped-types';
import { CreateBaseTransferDocsDto } from './create-base_transfer_docs.dto';

export class UpdateBaseTransferDocsDto extends PartialType(CreateBaseTransferDocsDto) {}