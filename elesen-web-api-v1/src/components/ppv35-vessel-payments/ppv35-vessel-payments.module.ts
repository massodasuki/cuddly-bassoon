import { Module } from '@nestjs/common';
import { Ppv35VesselPaymentsService } from './ppv35-vessel-payments.service';
import { Ppv35VesselPaymentsController } from './ppv35-vessel-payments.controller';
import { Ppv35VesselPaymentsEntity } from './ppv35-vessel-payments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv35VesselPaymentsEntity])],
  providers: [Ppv35VesselPaymentsService],
  controllers: [Ppv35VesselPaymentsController],
  exports: [Ppv35VesselPaymentsService],
})
export class Ppv35VesselPaymentsModule {}