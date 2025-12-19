import { Module } from '@nestjs/common';
import { Ppv04aVesselMinuteMessageService } from './ppv04a_vessel_minute_message.service';
import { Ppv04aVesselMinuteMessageController } from './ppv04a_vessel_minute_message.controller';
import { Ppv04aVesselMinuteMessageEntity } from './ppv04a_vessel_minute_message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselMinuteMessageEntity])],
  providers: [Ppv04aVesselMinuteMessageService],
  controllers: [Ppv04aVesselMinuteMessageController],
  exports: [Ppv04aVesselMinuteMessageService],
})
export class Ppv04aVesselMinuteMessageModule {}