import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationReceiptItemsDto } from './create-application-receipt-items.dto';

export class UpdateApplicationReceiptItemsDto extends PartialType(CreateApplicationReceiptItemsDto) {}