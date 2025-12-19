import { Module } from '@nestjs/common';
import { MppiVesselMinuteDiscussionService } from './mppi-vessel-minute-discussion.service';
import { MppiVesselMinuteDiscussionController } from './mppi-vessel-minute-discussion.controller';
import { MppiVesselMinuteDiscussionEntity } from './mppi-vessel-minute-discussion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselMinuteDiscussionEntity])],
  providers: [MppiVesselMinuteDiscussionService],
  controllers: [MppiVesselMinuteDiscussionController],
  exports: [MppiVesselMinuteDiscussionService],
})
export class MppiVesselMinuteDiscussionModule {}