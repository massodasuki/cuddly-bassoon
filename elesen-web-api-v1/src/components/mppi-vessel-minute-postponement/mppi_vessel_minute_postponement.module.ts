import { Module } from '@nestjs/common';
import { MppiVesselMinutePostponementService } from './mppi_vessel_minute_postponement.service';
import { MppiVesselMinutePostponementController } from './mppi_vessel_minute_postponement.controller';
import { MppiVesselMinutePostponementEntity } from './mppi_vessel_minute_postponement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselMinutePostponementEntity])],
  providers: [MppiVesselMinutePostponementService],
  controllers: [MppiVesselMinutePostponementController],
  exports: [MppiVesselMinutePostponementService],
})
export class MppiVesselMinutePostponementModule {}