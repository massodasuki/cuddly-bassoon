import { Module } from '@nestjs/common';
import { CauseLetterStagesService } from './cause_letter_stages.service';
import { CauseLetterStagesController } from './cause_letter_stages.controller';
import { CauseLetterStagesEntity } from './cause_letter_stages.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CauseLetterStagesEntity])],
  providers: [CauseLetterStagesService],
  controllers: [CauseLetterStagesController],
  exports: [CauseLetterStagesService],
})
export class CauseLetterStagesModule {}