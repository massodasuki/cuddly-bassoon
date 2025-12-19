import { Module } from '@nestjs/common';
import { MeetingAttendeesService } from './meeting-attendees.service';
import { MeetingAttendeesController } from './meeting-attendees.controller';
import { MeetingAttendeesEntity } from './meeting-attendees.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MeetingAttendeesEntity])],
  providers: [MeetingAttendeesService],
  controllers: [MeetingAttendeesController],
  exports: [MeetingAttendeesService],
})
export class MeetingAttendeesModule {}