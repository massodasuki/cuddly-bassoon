import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationTpuReceiptItemsDto } from './create-application-tpu-receipt-items.dto';

export class UpdateApplicationTpuReceiptItemsDto extends PartialType(CreateApplicationTpuReceiptItemsDto) {}