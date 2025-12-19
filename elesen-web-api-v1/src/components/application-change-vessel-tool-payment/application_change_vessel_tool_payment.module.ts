import { Module } from '@nestjs/common';
import { ApplicationChangeVesselToolPaymentService } from './application_change_vessel_tool_payment.service';
import { ApplicationChangeVesselToolPaymentController } from './application_change_vessel_tool_payment.controller';
import { ApplicationChangeVesselToolPaymentEntity } from './application_change_vessel_tool_payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationChangeVesselToolPaymentEntity])],
  providers: [ApplicationChangeVesselToolPaymentService],
  controllers: [ApplicationChangeVesselToolPaymentController],
  exports: [ApplicationChangeVesselToolPaymentService],
})
export class ApplicationChangeVesselToolPaymentModule {}