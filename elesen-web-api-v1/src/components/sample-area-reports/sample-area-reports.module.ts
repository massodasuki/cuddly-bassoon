import { Module } from '@nestjs/common';
import { SampleAreaReportService } from './sample-area-reports.service';
import { SampleAreaReportEntityController } from './sample-area-reports.controller';
import { SampleAreaReportEntity } from './sample-area-reports.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SampleAreaReportEntity])],
  providers: [SampleAreaReportService],
  controllers: [SampleAreaReportEntityController],
  exports: [SampleAreaReportService],
})
export class SampleAreaReportModule {}

