import { Module } from '@nestjs/common';
import { SampleAreaHistorieService } from './sample-area-histories.service';
import { SampleAreaHistorieEntityController } from './sample-area-histories.controller';
import { SampleAreaHistorieEntity } from './sample-area-histories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SampleAreaHistorieEntity])],
  providers: [SampleAreaHistorieService],
  controllers: [SampleAreaHistorieEntityController],
  exports: [SampleAreaHistorieService],
})
export class SampleAreaHistorieModule {}

