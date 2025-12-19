import { Module } from '@nestjs/common';
import { ApplicationTpuReceiptItemsService } from './application-tpu-receipt-items.service';
import { ApplicationTpuReceiptItemsController } from './application-tpu-receipt-items.controller';
import { ApplicationTpuReceiptItemsEntity } from './application-tpu-receipt-items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationTpuReceiptItemsEntity])],
  providers: [ApplicationTpuReceiptItemsService],
  controllers: [ApplicationTpuReceiptItemsController],
  exports: [ApplicationTpuReceiptItemsService],
})
export class ApplicationTpuReceiptItemsModule {}