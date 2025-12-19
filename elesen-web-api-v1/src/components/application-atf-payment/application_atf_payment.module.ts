import { Module } from '@nestjs/common';
import { ApplicationAtfPaymentService } from './application_atf_payment.service';
import { ApplicationAtfPaymentController } from './application_atf_payment.controller';
import { ApplicationAtfPaymentEntity } from './application_atf_payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationAtfPaymentEntity])],
  providers: [ApplicationAtfPaymentService],
  controllers: [ApplicationAtfPaymentController],
  exports: [ApplicationAtfPaymentService],
})
export class ApplicationAtfPaymentModule {}