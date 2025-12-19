import { Module } from '@nestjs/common';
import { EshndPaymentLogsService } from './eshnd-payment-logs.service';
import { EshndPaymentLogsController } from './eshnd-payment-logs.controller';
import { EshndPaymentLogsEntity } from './eshnd-payment-logs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EshndPaymentLogsEntity])],
  providers: [EshndPaymentLogsService],
  controllers: [EshndPaymentLogsController],
  exports: [EshndPaymentLogsService],
})
export class EshndPaymentLogsModule {}