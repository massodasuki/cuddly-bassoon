import { Module } from '@nestjs/common';
import { Ppv04bAgreeVesselNumbersService } from './ppv04b_agree_vessel_numbers.service';
import { Ppv04bAgreeVesselNumbersController } from './ppv04b_agree_vessel_numbers.controller';
import { Ppv04bAgreeVesselNumbersEntity } from './ppv04b_agree_vessel_numbers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bAgreeVesselNumbersEntity])],
  providers: [Ppv04bAgreeVesselNumbersService],
  controllers: [Ppv04bAgreeVesselNumbersController],
  exports: [Ppv04bAgreeVesselNumbersService],
})
export class Ppv04bAgreeVesselNumbersModule {}