import { Module } from '@nestjs/common';
import { CauseLetterAttachmentsService } from './cause_letter_attachments.service';
import { CauseLetterAttachmentsController } from './cause_letter_attachments.controller';
import { CauseLetterAttachmentsEntity } from './cause_letter_attachments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CauseLetterAttachmentsEntity])],
  providers: [CauseLetterAttachmentsService],
  controllers: [CauseLetterAttachmentsController],
  exports: [CauseLetterAttachmentsService],
})
export class CauseLetterAttachmentsModule {}