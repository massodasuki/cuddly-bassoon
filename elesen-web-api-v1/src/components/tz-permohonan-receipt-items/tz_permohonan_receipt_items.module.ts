import { Module } from '@nestjs/common';
import { TzPermohonanReceiptItemsService } from './tz_permohonan_receipt_items.service';
import { TzPermohonanReceiptItemsController } from './tz_permohonan_receipt_items.controller';
import { TzPermohonanReceiptItemsEntity } from './tz_permohonan_receipt_items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPermohonanReceiptItemsEntity])],
  providers: [TzPermohonanReceiptItemsService],
  controllers: [TzPermohonanReceiptItemsController],
  exports: [TzPermohonanReceiptItemsService],
})
export class TzPermohonanReceiptItemsModule {}