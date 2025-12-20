import { Controller, Get, Param } from '@nestjs/common';
import { ReceiptItemService } from './receipt-items.service';
import { ReceiptItemEntity } from './receipt-items.entity';

@Controller('receipt-items')
export class ReceiptItemEntityController {
  constructor(private readonly receiptItemsService: ReceiptItemService) {}

  @Get()
  findAll(): Promise<ReceiptItemEntity[]> {
    return this.receiptItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ReceiptItemEntity> {
    return this.receiptItemsService.findOne(id);
  }
}

