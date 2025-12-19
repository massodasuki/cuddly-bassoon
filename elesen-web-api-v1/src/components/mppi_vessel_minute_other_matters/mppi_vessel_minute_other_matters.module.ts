import { Module } from '@nestjs/common';
import { MppiVesselMinuteOtherMattersService } from './mppi_vessel_minute_other_matters.service';
import { MppiVesselMinuteOtherMattersController } from './mppi_vessel_minute_other_matters.controller';
import { MppiVesselMinuteOtherMattersEntity } from './mppi_vessel_minute_other_matters.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselMinuteOtherMattersEntity])],
  providers: [MppiVesselMinuteOtherMattersService],
  controllers: [MppiVesselMinuteOtherMattersController],
  exports: [MppiVesselMinuteOtherMattersService],
})
export class MppiVesselMinuteOtherMattersModule {}