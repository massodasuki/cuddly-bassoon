import { PartialType } from '@nestjs/mapped-types';
import { CreateBaseTransferAppsDto } from './create-base-transfer-apps.dto';

export class UpdateBaseTransferAppsDto extends PartialType(CreateBaseTransferAppsDto) {}