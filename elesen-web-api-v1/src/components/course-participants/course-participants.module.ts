import { Module } from '@nestjs/common';
import { CourseParticipantsService } from './course-participants.service';
import { CourseParticipantsController } from './course-participants.controller';
import { CourseParticipantsEntity } from './course-participants.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CourseParticipantsEntity])],
  providers: [CourseParticipantsService],
  controllers: [CourseParticipantsController],
  exports: [CourseParticipantsService],
})
export class CourseParticipantsModule {}