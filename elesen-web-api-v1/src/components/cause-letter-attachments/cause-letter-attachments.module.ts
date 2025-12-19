import { Module } from '@nestjs/common';
import { CauseLetterAttachmentsService } from './cause-letter-attachments.service';
import { CauseLetterAttachmentsController } from './cause-letter-attachments.controller';
import { CauseLetterAttachmentsEntity } from './cause-letter-attachments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CauseLetterAttachmentsEntity])],
  providers: [CauseLetterAttachmentsService],
  controllers: [CauseLetterAttachmentsController],
  exports: [CauseLetterAttachmentsService],
})
export class CauseLetterAttachmentsModule {}