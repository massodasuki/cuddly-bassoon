import { Module } from '@nestjs/common';
import { MppiVesselMinuteMessageService } from './mppi-vessel-minute-message.service';
import { MppiVesselMinuteMessageController } from './mppi-vessel-minute-message.controller';
import { MppiVesselMinuteMessageEntity } from './mppi-vessel-minute-message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselMinuteMessageEntity])],
  providers: [MppiVesselMinuteMessageService],
  controllers: [MppiVesselMinuteMessageController],
  exports: [MppiVesselMinuteMessageService],
})
export class MppiVesselMinuteMessageModule {}