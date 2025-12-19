import { Controller, Get, Param } from '@nestjs/common';
import { DaratPaymentReceiptService } from './darat-payment-receipts.service';
import { DaratPaymentReceiptEntity } from './darat-payment-receipts.entity';

@Controller('darat-payment-receipts')
export class DaratPaymentReceiptEntityController {
  constructor(private readonly daratPaymentReceiptsService: DaratPaymentReceiptService) {}

  @Get()
  findAll(): Promise<DaratPaymentReceiptEntity[]> {
    return this.daratPaymentReceiptsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratPaymentReceiptEntity> {
    return this.daratPaymentReceiptsService.findOne(id);
  }
}
