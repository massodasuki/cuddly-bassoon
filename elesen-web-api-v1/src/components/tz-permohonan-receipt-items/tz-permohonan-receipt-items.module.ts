import { Module } from '@nestjs/common';
import { TzPermohonanReceiptItemsService } from './tz-permohonan-receipt-items.service';
import { TzPermohonanReceiptItemsController } from './tz-permohonan-receipt-items.controller';
import { TzPermohonanReceiptItemsEntity } from './tz-permohonan-receipt-items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPermohonanReceiptItemsEntity])],
  providers: [TzPermohonanReceiptItemsService],
  controllers: [TzPermohonanReceiptItemsController],
  exports: [TzPermohonanReceiptItemsService],
})
export class TzPermohonanReceiptItemsModule {}