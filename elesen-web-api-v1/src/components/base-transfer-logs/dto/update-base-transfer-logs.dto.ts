import { PartialType } from '@nestjs/mapped-types';
import { CreateBaseTransferLogsDto } from './create-base-transfer-logs.dto';

export class UpdateBaseTransferLogsDto extends PartialType(CreateBaseTransferLogsDto) {}