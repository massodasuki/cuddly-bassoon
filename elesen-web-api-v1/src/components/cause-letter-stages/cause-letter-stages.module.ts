import { Module } from '@nestjs/common';
import { CauseLetterStagesService } from './cause-letter-stages.service';
import { CauseLetterStagesController } from './cause-letter-stages.controller';
import { CauseLetterStagesEntity } from './cause-letter-stages.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CauseLetterStagesEntity])],
  providers: [CauseLetterStagesService],
  controllers: [CauseLetterStagesController],
  exports: [CauseLetterStagesService],
})
export class CauseLetterStagesModule {}