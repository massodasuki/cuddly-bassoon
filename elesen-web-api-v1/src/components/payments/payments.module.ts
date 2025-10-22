import { Module } from '@nestjs/common';
import { PaymentService } from './payments.service';
import { PaymentEntityController } from './payments.controller';
import { PaymentEntity } from './payments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentEntity])],
  providers: [PaymentService],
  controllers: [PaymentEntityController],
  exports: [PaymentService],
})
export class PaymentModule {}
