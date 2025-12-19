import { Module } from '@nestjs/common';
import { DaratPaymentReceiptService } from './darat-payment-receipts.service';
import { DaratPaymentReceiptEntityController } from './darat-payment-receipts.controller';
import { DaratPaymentReceiptEntity } from './darat-payment-receipts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratPaymentReceiptEntity])],
  providers: [DaratPaymentReceiptService],
  controllers: [DaratPaymentReceiptEntityController],
  exports: [DaratPaymentReceiptService],
})
export class DaratPaymentReceiptModule {}
