import { Module } from '@nestjs/common';
import { MeetingContentsService } from './meeting-contents.service';
import { MeetingContentsController } from './meeting-contents.controller';
import { MeetingContentsEntity } from './meeting-contents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MeetingContentsEntity])],
  providers: [MeetingContentsService],
  controllers: [MeetingContentsController],
  exports: [MeetingContentsService],
})
export class MeetingContentsModule {}