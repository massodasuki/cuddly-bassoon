import { Module } from '@nestjs/common';
import { Ppv04aVesselPaymentService } from './ppv04a_vessel_payment.service';
import { Ppv04aVesselPaymentController } from './ppv04a_vessel_payment.controller';
import { Ppv04aVesselPaymentEntity } from './ppv04a_vessel_payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselPaymentEntity])],
  providers: [Ppv04aVesselPaymentService],
  controllers: [Ppv04aVesselPaymentController],
  exports: [Ppv04aVesselPaymentService],
})
export class Ppv04aVesselPaymentModule {}