import { Module } from '@nestjs/common';
import { MppiVesselMinuteMessageService } from './mppi_vessel_minute_message.service';
import { MppiVesselMinuteMessageController } from './mppi_vessel_minute_message.controller';
import { MppiVesselMinuteMessageEntity } from './mppi_vessel_minute_message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselMinuteMessageEntity])],
  providers: [MppiVesselMinuteMessageService],
  controllers: [MppiVesselMinuteMessageController],
  exports: [MppiVesselMinuteMessageService],
})
export class MppiVesselMinuteMessageModule {}