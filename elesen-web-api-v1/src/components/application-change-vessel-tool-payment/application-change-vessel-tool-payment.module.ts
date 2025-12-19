import { Module } from '@nestjs/common';
import { ApplicationChangeVesselToolPaymentService } from './application-change-vessel-tool-payment.service';
import { ApplicationChangeVesselToolPaymentController } from './application-change-vessel-tool-payment.controller';
import { ApplicationChangeVesselToolPaymentEntity } from './application-change-vessel-tool-payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationChangeVesselToolPaymentEntity])],
  providers: [ApplicationChangeVesselToolPaymentService],
  controllers: [ApplicationChangeVesselToolPaymentController],
  exports: [ApplicationChangeVesselToolPaymentService],
})
export class ApplicationChangeVesselToolPaymentModule {}