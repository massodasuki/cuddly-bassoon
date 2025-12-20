import { Module } from '@nestjs/common';
import { ShellsQuotaPaymentService } from './shells-quota-payments.service';
import { ShellsQuotaPaymentEntityController } from './shells-quota-payments.controller';
import { ShellsQuotaPaymentEntity } from './shells-quota-payments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ShellsQuotaPaymentEntity])],
  providers: [ShellsQuotaPaymentService],
  controllers: [ShellsQuotaPaymentEntityController],
  exports: [ShellsQuotaPaymentService],
})
export class ShellsQuotaPaymentModule {}

