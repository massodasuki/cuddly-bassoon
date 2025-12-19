import { Module } from '@nestjs/common';
import { MeetingAttendeesService } from './meeting_attendees.service';
import { MeetingAttendeesController } from './meeting_attendees.controller';
import { MeetingAttendeesEntity } from './meeting_attendees.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MeetingAttendeesEntity])],
  providers: [MeetingAttendeesService],
  controllers: [MeetingAttendeesController],
  exports: [MeetingAttendeesService],
})
export class MeetingAttendeesModule {}