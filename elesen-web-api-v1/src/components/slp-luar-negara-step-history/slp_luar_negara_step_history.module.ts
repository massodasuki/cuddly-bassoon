import { Module } from '@nestjs/common';
import { SlpLuarNegaraStepHistoryService } from './slp_luar_negara_step_history.service';
import { SlpLuarNegaraStepHistoryController } from './slp_luar_negara_step_history.controller';
import { SlpLuarNegaraStepHistoryEntity } from './slp_luar_negara_step_history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SlpLuarNegaraStepHistoryEntity])],
  providers: [SlpLuarNegaraStepHistoryService],
  controllers: [SlpLuarNegaraStepHistoryController],
  exports: [SlpLuarNegaraStepHistoryService],
})
export class SlpLuarNegaraStepHistoryModule {}