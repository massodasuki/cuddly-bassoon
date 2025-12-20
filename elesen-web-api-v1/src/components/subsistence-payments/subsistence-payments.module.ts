import { Module } from '@nestjs/common';
import { SubsistencePaymentService } from './subsistence-payments.service';
import { SubsistencePaymentEntityController } from './subsistence-payments.controller';
import { SubsistencePaymentEntity } from './subsistence-payments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubsistencePaymentEntity])],
  providers: [SubsistencePaymentService],
  controllers: [SubsistencePaymentEntityController],
  exports: [SubsistencePaymentService],
})
export class SubsistencePaymentModule {}

