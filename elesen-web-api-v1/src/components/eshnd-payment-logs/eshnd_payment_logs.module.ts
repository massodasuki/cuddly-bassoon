import { Module } from '@nestjs/common';
import { EshndPaymentLogsService } from './eshnd_payment_logs.service';
import { EshndPaymentLogsController } from './eshnd_payment_logs.controller';
import { EshndPaymentLogsEntity } from './eshnd_payment_logs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EshndPaymentLogsEntity])],
  providers: [EshndPaymentLogsService],
  controllers: [EshndPaymentLogsController],
  exports: [EshndPaymentLogsService],
})
export class EshndPaymentLogsModule {}