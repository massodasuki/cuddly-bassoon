import { Module } from '@nestjs/common';
import { Ppv04aVesselPaymentInfoService } from './ppv04a_vessel_payment_info.service';
import { Ppv04aVesselPaymentInfoController } from './ppv04a_vessel_payment_info.controller';
import { Ppv04aVesselPaymentInfoEntity } from './ppv04a_vessel_payment_info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselPaymentInfoEntity])],
  providers: [Ppv04aVesselPaymentInfoService],
  controllers: [Ppv04aVesselPaymentInfoController],
  exports: [Ppv04aVesselPaymentInfoService],
})
export class Ppv04aVesselPaymentInfoModule {}