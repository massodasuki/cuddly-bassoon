import { Module } from '@nestjs/common';
import { Ppv04bInspectionReportOneService } from './ppv04b_inspection_report_one.service';
import { Ppv04bInspectionReportOneController } from './ppv04b_inspection_report_one.controller';
import { Ppv04bInspectionReportOneEntity } from './ppv04b_inspection_report_one.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bInspectionReportOneEntity])],
  providers: [Ppv04bInspectionReportOneService],
  controllers: [Ppv04bInspectionReportOneController],
  exports: [Ppv04bInspectionReportOneService],
})
export class Ppv04bInspectionReportOneModule {}