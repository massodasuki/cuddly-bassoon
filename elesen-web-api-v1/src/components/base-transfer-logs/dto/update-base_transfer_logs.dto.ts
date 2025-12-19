import { PartialType } from '@nestjs/mapped-types';
import { CreateBaseTransferLogsDto } from './create-base_transfer_logs.dto';

export class UpdateBaseTransferLogsDto extends PartialType(CreateBaseTransferLogsDto) {}