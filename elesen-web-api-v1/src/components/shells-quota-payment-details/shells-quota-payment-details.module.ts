import { Module } from '@nestjs/common';
import { ShellsQuotaPaymentDetailService } from './shells-quota-payment-details.service';
import { ShellsQuotaPaymentDetailEntityController } from './shells-quota-payment-details.controller';
import { ShellsQuotaPaymentDetailEntity } from './shells-quota-payment-details.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ShellsQuotaPaymentDetailEntity])],
  providers: [ShellsQuotaPaymentDetailService],
  controllers: [ShellsQuotaPaymentDetailEntityController],
  exports: [ShellsQuotaPaymentDetailService],
})
export class ShellsQuotaPaymentDetailModule {}

