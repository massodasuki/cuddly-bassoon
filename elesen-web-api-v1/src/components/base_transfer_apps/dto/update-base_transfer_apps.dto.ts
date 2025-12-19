import { PartialType } from '@nestjs/mapped-types';
import { CreateBaseTransferAppsDto } from './create-base_transfer_apps.dto';

export class UpdateBaseTransferAppsDto extends PartialType(CreateBaseTransferAppsDto) {}