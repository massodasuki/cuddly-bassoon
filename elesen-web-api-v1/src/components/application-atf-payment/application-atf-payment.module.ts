import { Module } from '@nestjs/common';
import { ApplicationAtfPaymentService } from './application-atf-payment.service';
import { ApplicationAtfPaymentController } from './application-atf-payment.controller';
import { ApplicationAtfPaymentEntity } from './application-atf-payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationAtfPaymentEntity])],
  providers: [ApplicationAtfPaymentService],
  controllers: [ApplicationAtfPaymentController],
  exports: [ApplicationAtfPaymentService],
})
export class ApplicationAtfPaymentModule {}