import { Module } from '@nestjs/common';
import { ReceiptItemService } from './receipt-items.service';
import { ReceiptItemEntityController } from './receipt-items.controller';
import { ReceiptItemEntity } from './receipt-items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ReceiptItemEntity])],
  providers: [ReceiptItemService],
  controllers: [ReceiptItemEntityController],
  exports: [ReceiptItemService],
})
export class ReceiptItemModule {}
