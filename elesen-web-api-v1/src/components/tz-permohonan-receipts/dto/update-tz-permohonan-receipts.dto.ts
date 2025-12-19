import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPermohonanReceiptsDto } from './create-tz-permohonan-receipts.dto';

export class UpdateTzPermohonanReceiptsDto extends PartialType(CreateTzPermohonanReceiptsDto) {}