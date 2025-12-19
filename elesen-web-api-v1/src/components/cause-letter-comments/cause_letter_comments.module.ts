import { Module } from '@nestjs/common';
import { CauseLetterCommentsService } from './cause_letter_comments.service';
import { CauseLetterCommentsController } from './cause_letter_comments.controller';
import { CauseLetterCommentsEntity } from './cause_letter_comments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CauseLetterCommentsEntity])],
  providers: [CauseLetterCommentsService],
  controllers: [CauseLetterCommentsController],
  exports: [CauseLetterCommentsService],
})
export class CauseLetterCommentsModule {}