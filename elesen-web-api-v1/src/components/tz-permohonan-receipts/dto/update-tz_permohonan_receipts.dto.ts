import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPermohonanReceiptsDto } from './create-tz_permohonan_receipts.dto';

export class UpdateTzPermohonanReceiptsDto extends PartialType(CreateTzPermohonanReceiptsDto) {}