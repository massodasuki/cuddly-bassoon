import { Module } from '@nestjs/common';
import { MppiVesselPaymentService } from './mppi_vessel_payment.service';
import { MppiVesselPaymentController } from './mppi_vessel_payment.controller';
import { MppiVesselPaymentEntity } from './mppi_vessel_payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselPaymentEntity])],
  providers: [MppiVesselPaymentService],
  controllers: [MppiVesselPaymentController],
  exports: [MppiVesselPaymentService],
})
export class MppiVesselPaymentModule {}