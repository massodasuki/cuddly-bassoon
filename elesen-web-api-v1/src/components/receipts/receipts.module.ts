import { Module } from '@nestjs/common';
import { ReceiptService } from './receipts.service';
import { ReceiptEntityController } from './receipts.controller';
import { ReceiptEntity } from './receipts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ReceiptEntity])],
  providers: [ReceiptService],
  controllers: [ReceiptEntityController],
  exports: [ReceiptService],
})
export class ReceiptModule {}
