import { Module } from '@nestjs/common';
import { MppiVesselMinuteDiscussionService } from './mppi_vessel_minute_discussion.service';
import { MppiVesselMinuteDiscussionController } from './mppi_vessel_minute_discussion.controller';
import { MppiVesselMinuteDiscussionEntity } from './mppi_vessel_minute_discussion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselMinuteDiscussionEntity])],
  providers: [MppiVesselMinuteDiscussionService],
  controllers: [MppiVesselMinuteDiscussionController],
  exports: [MppiVesselMinuteDiscussionService],
})
export class MppiVesselMinuteDiscussionModule {}