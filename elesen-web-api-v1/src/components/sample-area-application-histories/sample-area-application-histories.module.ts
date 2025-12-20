import { Module } from '@nestjs/common';
import { SampleAreaApplicationHistorieService } from './sample-area-application-histories.service';
import { SampleAreaApplicationHistorieEntityController } from './sample-area-application-histories.controller';
import { SampleAreaApplicationHistorieEntity } from './sample-area-application-histories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SampleAreaApplicationHistorieEntity])],
  providers: [SampleAreaApplicationHistorieService],
  controllers: [SampleAreaApplicationHistorieEntityController],
  exports: [SampleAreaApplicationHistorieService],
})
export class SampleAreaApplicationHistorieModule {}

