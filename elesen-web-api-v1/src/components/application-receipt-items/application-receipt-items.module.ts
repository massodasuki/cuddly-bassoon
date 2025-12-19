import { Module } from '@nestjs/common';
import { ApplicationReceiptItemsService } from './application-receipt-items.service';
import { ApplicationReceiptItemsController } from './application-receipt-items.controller';
import { ApplicationReceiptItemsEntity } from './application-receipt-items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationReceiptItemsEntity])],
  providers: [ApplicationReceiptItemsService],
  controllers: [ApplicationReceiptItemsController],
  exports: [ApplicationReceiptItemsService],
})
export class ApplicationReceiptItemsModule {}