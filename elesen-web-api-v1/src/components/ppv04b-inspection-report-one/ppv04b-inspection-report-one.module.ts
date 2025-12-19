import { Module } from '@nestjs/common';
import { Ppv04bInspectionReportOneService } from './ppv04b-inspection-report-one.service';
import { Ppv04bInspectionReportOneController } from './ppv04b-inspection-report-one.controller';
import { Ppv04bInspectionReportOneEntity } from './ppv04b-inspection-report-one.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bInspectionReportOneEntity])],
  providers: [Ppv04bInspectionReportOneService],
  controllers: [Ppv04bInspectionReportOneController],
  exports: [Ppv04bInspectionReportOneService],
})
export class Ppv04bInspectionReportOneModule {}