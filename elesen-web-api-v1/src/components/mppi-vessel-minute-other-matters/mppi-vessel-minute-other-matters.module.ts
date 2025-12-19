import { Module } from '@nestjs/common';
import { MppiVesselMinuteOtherMattersService } from './mppi-vessel-minute-other-matters.service';
import { MppiVesselMinuteOtherMattersController } from './mppi-vessel-minute-other-matters.controller';
import { MppiVesselMinuteOtherMattersEntity } from './mppi-vessel-minute-other-matters.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselMinuteOtherMattersEntity])],
  providers: [MppiVesselMinuteOtherMattersService],
  controllers: [MppiVesselMinuteOtherMattersController],
  exports: [MppiVesselMinuteOtherMattersService],
})
export class MppiVesselMinuteOtherMattersModule {}