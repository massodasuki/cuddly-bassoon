import { Module } from '@nestjs/common';
import { SubsistencePaymentStateService } from './subsistence-payment-states.service';
import { SubsistencePaymentStateEntityController } from './subsistence-payment-states.controller';
import { SubsistencePaymentStateEntity } from './subsistence-payment-states.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubsistencePaymentStateEntity])],
  providers: [SubsistencePaymentStateService],
  controllers: [SubsistencePaymentStateEntityController],
  exports: [SubsistencePaymentStateService],
})
export class SubsistencePaymentStateModule {}

