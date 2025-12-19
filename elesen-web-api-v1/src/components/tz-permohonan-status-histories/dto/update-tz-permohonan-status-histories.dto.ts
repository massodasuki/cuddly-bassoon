import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPermohonanStatusHistoriesDto } from './create-tz-permohonan-status-histories.dto';

export class UpdateTzPermohonanStatusHistoriesDto extends PartialType(CreateTzPermohonanStatusHistoriesDto) {}