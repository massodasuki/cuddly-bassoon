import { Module } from '@nestjs/common';
import { ApplicationTpuReceiptItemsService } from './application_tpu_receipt_items.service';
import { ApplicationTpuReceiptItemsController } from './application_tpu_receipt_items.controller';
import { ApplicationTpuReceiptItemsEntity } from './application_tpu_receipt_items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationTpuReceiptItemsEntity])],
  providers: [ApplicationTpuReceiptItemsService],
  controllers: [ApplicationTpuReceiptItemsController],
  exports: [ApplicationTpuReceiptItemsService],
})
export class ApplicationTpuReceiptItemsModule {}