import { Module } from '@nestjs/common';
import { MeetingContentsService } from './meeting_contents.service';
import { MeetingContentsController } from './meeting_contents.controller';
import { MeetingContentsEntity } from './meeting_contents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MeetingContentsEntity])],
  providers: [MeetingContentsService],
  controllers: [MeetingContentsController],
  exports: [MeetingContentsService],
})
export class MeetingContentsModule {}