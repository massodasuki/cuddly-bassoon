import { Module } from '@nestjs/common';
import { SlpDomestikStepHistoryService } from './slp-domestik-step-history.service';
import { SlpDomestikStepHistoryController } from './slp-domestik-step-history.controller';
import { SlpDomestikStepHistoryEntity } from './slp-domestik-step-history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SlpDomestikStepHistoryEntity])],
  providers: [SlpDomestikStepHistoryService],
  controllers: [SlpDomestikStepHistoryController],
  exports: [SlpDomestikStepHistoryService],
})
export class SlpDomestikStepHistoryModule {}