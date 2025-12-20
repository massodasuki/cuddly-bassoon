import { Module } from '@nestjs/common';
import { DaratPaymentReceiptItemService } from './darat-payment-receipt-items.service';
import { DaratPaymentReceiptItemEntityController } from './darat-payment-receipt-items.controller';
import { DaratPaymentReceiptItemEntity } from './darat-payment-receipt-items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratPaymentReceiptItemEntity])],
  providers: [DaratPaymentReceiptItemService],
  controllers: [DaratPaymentReceiptItemEntityController],
  exports: [DaratPaymentReceiptItemService],
})
export class DaratPaymentReceiptItemModule {}

