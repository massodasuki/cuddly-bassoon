import { Module } from '@nestjs/common';
import { CourseParticipantsService } from './course_participants.service';
import { CourseParticipantsController } from './course_participants.controller';
import { CourseParticipantsEntity } from './course_participants.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CourseParticipantsEntity])],
  providers: [CourseParticipantsService],
  controllers: [CourseParticipantsController],
  exports: [CourseParticipantsService],
})
export class CourseParticipantsModule {}