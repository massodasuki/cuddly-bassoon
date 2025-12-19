import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPermohonanStatusHistoriesDto } from './create-tz_permohonan_status_histories.dto';

export class UpdateTzPermohonanStatusHistoriesDto extends PartialType(CreateTzPermohonanStatusHistoriesDto) {}