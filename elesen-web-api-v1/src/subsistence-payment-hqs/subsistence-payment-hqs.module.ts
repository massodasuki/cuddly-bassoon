import { Module } from '@nestjs/common';
import { SubsistencePaymentHqService } from './subsistence-payment-hqs.service';
import { SubsistencePaymentHqEntityController } from './subsistence-payment-hqs.controller';
import { SubsistencePaymentHqEntity } from './subsistence-payment-hqs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubsistencePaymentHqEntity])],
  providers: [SubsistencePaymentHqService],
  controllers: [SubsistencePaymentHqEntityController],
  exports: [SubsistencePaymentHqService],
})
export class SubsistencePaymentHqModule {}
