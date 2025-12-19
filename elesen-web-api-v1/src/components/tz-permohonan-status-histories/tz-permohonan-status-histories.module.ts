import { Module } from '@nestjs/common';
import { TzPermohonanStatusHistoriesService } from './tz-permohonan-status-histories.service';
import { TzPermohonanStatusHistoriesController } from './tz-permohonan-status-histories.controller';
import { TzPermohonanStatusHistoriesEntity } from './tz-permohonan-status-histories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPermohonanStatusHistoriesEntity])],
  providers: [TzPermohonanStatusHistoriesService],
  controllers: [TzPermohonanStatusHistoriesController],
  exports: [TzPermohonanStatusHistoriesService],
})
export class TzPermohonanStatusHistoriesModule {}