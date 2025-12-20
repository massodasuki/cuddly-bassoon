import { Controller, Get, Param } from '@nestjs/common';
import { DaratPaymentReceiptItemService } from './darat-payment-receipt-items.service';
import { DaratPaymentReceiptItemEntity } from './darat-payment-receipt-items.entity';

@Controller('darat-payment-receipt-items')
export class DaratPaymentReceiptItemEntityController {
  constructor(private readonly daratPaymentReceiptItemsService: DaratPaymentReceiptItemService) {}

  @Get()
  findAll(): Promise<DaratPaymentReceiptItemEntity[]> {
    return this.daratPaymentReceiptItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratPaymentReceiptItemEntity> {
    return this.daratPaymentReceiptItemsService.findOne(id);
  }
}

