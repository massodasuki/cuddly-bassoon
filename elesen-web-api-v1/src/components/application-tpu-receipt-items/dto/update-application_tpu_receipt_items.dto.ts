import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationTpuReceiptItemsDto } from './create-application_tpu_receipt_items.dto';

export class UpdateApplicationTpuReceiptItemsDto extends PartialType(CreateApplicationTpuReceiptItemsDto) {}