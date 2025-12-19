import { Module } from '@nestjs/common';
import { CauseLetterCommentsService } from './cause-letter-comments.service';
import { CauseLetterCommentsController } from './cause-letter-comments.controller';
import { CauseLetterCommentsEntity } from './cause-letter-comments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CauseLetterCommentsEntity])],
  providers: [CauseLetterCommentsService],
  controllers: [CauseLetterCommentsController],
  exports: [CauseLetterCommentsService],
})
export class CauseLetterCommentsModule {}