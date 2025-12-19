import { Module } from '@nestjs/common';
import { Ppv35VesselPaymentItemsService } from './ppv35_vessel_payment_items.service';
import { Ppv35VesselPaymentItemsController } from './ppv35_vessel_payment_items.controller';
import { Ppv35VesselPaymentItemsEntity } from './ppv35_vessel_payment_items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv35VesselPaymentItemsEntity])],
  providers: [Ppv35VesselPaymentItemsService],
  controllers: [Ppv35VesselPaymentItemsController],
  exports: [Ppv35VesselPaymentItemsService],
})
export class Ppv35VesselPaymentItemsModule {}