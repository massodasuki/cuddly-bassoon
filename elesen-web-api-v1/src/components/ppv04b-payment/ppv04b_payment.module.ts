import { Module } from '@nestjs/common';
import { Ppv04bPaymentService } from './ppv04b_payment.service';
import { Ppv04bPaymentController } from './ppv04b_payment.controller';
import { Ppv04bPaymentEntity } from './ppv04b_payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bPaymentEntity])],
  providers: [Ppv04bPaymentService],
  controllers: [Ppv04bPaymentController],
  exports: [Ppv04bPaymentService],
})
export class Ppv04bPaymentModule {}