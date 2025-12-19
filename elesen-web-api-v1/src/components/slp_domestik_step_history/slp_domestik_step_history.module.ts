import { Module } from '@nestjs/common';
import { SlpDomestikStepHistoryService } from './slp_domestik_step_history.service';
import { SlpDomestikStepHistoryController } from './slp_domestik_step_history.controller';
import { SlpDomestikStepHistoryEntity } from './slp_domestik_step_history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SlpDomestikStepHistoryEntity])],
  providers: [SlpDomestikStepHistoryService],
  controllers: [SlpDomestikStepHistoryController],
  exports: [SlpDomestikStepHistoryService],
})
export class SlpDomestikStepHistoryModule {}