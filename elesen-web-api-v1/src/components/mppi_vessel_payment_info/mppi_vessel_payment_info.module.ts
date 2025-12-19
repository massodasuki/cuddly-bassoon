import { Module } from '@nestjs/common';
import { MppiVesselPaymentInfoService } from './mppi_vessel_payment_info.service';
import { MppiVesselPaymentInfoController } from './mppi_vessel_payment_info.controller';
import { MppiVesselPaymentInfoEntity } from './mppi_vessel_payment_info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselPaymentInfoEntity])],
  providers: [MppiVesselPaymentInfoService],
  controllers: [MppiVesselPaymentInfoController],
  exports: [MppiVesselPaymentInfoService],
})
export class MppiVesselPaymentInfoModule {}