import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPermohonanReceiptItemsDto } from './create-tz-permohonan-receipt-items.dto';

export class UpdateTzPermohonanReceiptItemsDto extends PartialType(CreateTzPermohonanReceiptItemsDto) {}