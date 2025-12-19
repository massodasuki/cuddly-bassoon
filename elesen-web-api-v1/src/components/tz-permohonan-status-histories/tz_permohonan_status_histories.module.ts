import { Module } from '@nestjs/common';
import { TzPermohonanStatusHistoriesService } from './tz_permohonan_status_histories.service';
import { TzPermohonanStatusHistoriesController } from './tz_permohonan_status_histories.controller';
import { TzPermohonanStatusHistoriesEntity } from './tz_permohonan_status_histories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzPermohonanStatusHistoriesEntity])],
  providers: [TzPermohonanStatusHistoriesService],
  controllers: [TzPermohonanStatusHistoriesController],
  exports: [TzPermohonanStatusHistoriesService],
})
export class TzPermohonanStatusHistoriesModule {}