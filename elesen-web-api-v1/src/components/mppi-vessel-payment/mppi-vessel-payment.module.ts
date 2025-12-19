import { Module } from '@nestjs/common';
import { MppiVesselPaymentService } from './mppi-vessel-payment.service';
import { MppiVesselPaymentController } from './mppi-vessel-payment.controller';
import { MppiVesselPaymentEntity } from './mppi-vessel-payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselPaymentEntity])],
  providers: [MppiVesselPaymentService],
  controllers: [MppiVesselPaymentController],
  exports: [MppiVesselPaymentService],
})
export class MppiVesselPaymentModule {}