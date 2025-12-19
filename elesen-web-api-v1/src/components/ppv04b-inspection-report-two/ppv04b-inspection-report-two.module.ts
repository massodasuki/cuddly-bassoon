import { Module } from '@nestjs/common';
import { Ppv04bInspectionReportTwoService } from './ppv04b-inspection-report-two.service';
import { Ppv04bInspectionReportTwoController } from './ppv04b-inspection-report-two.controller';
import { Ppv04bInspectionReportTwoEntity } from './ppv04b-inspection-report-two.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bInspectionReportTwoEntity])],
  providers: [Ppv04bInspectionReportTwoService],
  controllers: [Ppv04bInspectionReportTwoController],
  exports: [Ppv04bInspectionReportTwoService],
})
export class Ppv04bInspectionReportTwoModule {}