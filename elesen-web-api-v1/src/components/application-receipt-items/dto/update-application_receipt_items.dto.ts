import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationReceiptItemsDto } from './create-application_receipt_items.dto';

export class UpdateApplicationReceiptItemsDto extends PartialType(CreateApplicationReceiptItemsDto) {}