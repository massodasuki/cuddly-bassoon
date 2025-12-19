import { Module } from '@nestjs/common';
import { SlpLuarNegaraStepHistoryService } from './slp-luar-negara-step-history.service';
import { SlpLuarNegaraStepHistoryController } from './slp-luar-negara-step-history.controller';
import { SlpLuarNegaraStepHistoryEntity } from './slp-luar-negara-step-history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SlpLuarNegaraStepHistoryEntity])],
  providers: [SlpLuarNegaraStepHistoryService],
  controllers: [SlpLuarNegaraStepHistoryController],
  exports: [SlpLuarNegaraStepHistoryService],
})
export class SlpLuarNegaraStepHistoryModule {}