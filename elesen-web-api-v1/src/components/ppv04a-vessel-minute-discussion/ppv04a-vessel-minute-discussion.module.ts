import { Module } from '@nestjs/common';
import { Ppv04aVesselMinuteDiscussionService } from './ppv04a-vessel-minute-discussion.service';
import { Ppv04aVesselMinuteDiscussionController } from './ppv04a-vessel-minute-discussion.controller';
import { Ppv04aVesselMinuteDiscussionEntity } from './ppv04a-vessel-minute-discussion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselMinuteDiscussionEntity])],
  providers: [Ppv04aVesselMinuteDiscussionService],
  controllers: [Ppv04aVesselMinuteDiscussionController],
  exports: [Ppv04aVesselMinuteDiscussionService],
})
export class Ppv04aVesselMinuteDiscussionModule {}