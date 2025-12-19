import { Module } from '@nestjs/common';
import { MppiVesselMinutePostponementService } from './mppi-vessel-minute-postponement.service';
import { MppiVesselMinutePostponementController } from './mppi-vessel-minute-postponement.controller';
import { MppiVesselMinutePostponementEntity } from './mppi-vessel-minute-postponement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselMinutePostponementEntity])],
  providers: [MppiVesselMinutePostponementService],
  controllers: [MppiVesselMinutePostponementController],
  exports: [MppiVesselMinutePostponementService],
})
export class MppiVesselMinutePostponementModule {}