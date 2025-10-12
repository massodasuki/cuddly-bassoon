import { Module } from '@nestjs/common';
import { SubsistencePaymentPayeeService } from './subsistence-payment-payees.service';
import { SubsistencePaymentPayeeEntityController } from './subsistence-payment-payees.controller';
import { SubsistencePaymentPayeeEntity } from './subsistence-payment-payees.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubsistencePaymentPayeeEntity])],
  providers: [SubsistencePaymentPayeeService],
  controllers: [SubsistencePaymentPayeeEntityController],
  exports: [SubsistencePaymentPayeeService],
})
export class SubsistencePaymentPayeeModule {}
