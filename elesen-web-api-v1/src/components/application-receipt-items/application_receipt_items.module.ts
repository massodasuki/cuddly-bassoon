import { Module } from '@nestjs/common';
import { ApplicationReceiptItemsService } from './application_receipt_items.service';
import { ApplicationReceiptItemsController } from './application_receipt_items.controller';
import { ApplicationReceiptItemsEntity } from './application_receipt_items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationReceiptItemsEntity])],
  providers: [ApplicationReceiptItemsService],
  controllers: [ApplicationReceiptItemsController],
  exports: [ApplicationReceiptItemsService],
})
export class ApplicationReceiptItemsModule {}