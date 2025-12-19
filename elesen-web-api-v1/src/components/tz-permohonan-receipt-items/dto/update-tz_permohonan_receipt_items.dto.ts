import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPermohonanReceiptItemsDto } from './create-tz_permohonan_receipt_items.dto';

export class UpdateTzPermohonanReceiptItemsDto extends PartialType(CreateTzPermohonanReceiptItemsDto) {}