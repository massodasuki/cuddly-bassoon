import { Module } from '@nestjs/common';
import { MppiVesselPaymentInfoService } from './mppi-vessel-payment-info.service';
import { MppiVesselPaymentInfoController } from './mppi-vessel-payment-info.controller';
import { MppiVesselPaymentInfoEntity } from './mppi-vessel-payment-info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselPaymentInfoEntity])],
  providers: [MppiVesselPaymentInfoService],
  controllers: [MppiVesselPaymentInfoController],
  exports: [MppiVesselPaymentInfoService],
})
export class MppiVesselPaymentInfoModule {}