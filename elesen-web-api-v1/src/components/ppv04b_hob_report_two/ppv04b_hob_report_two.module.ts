import { Module } from '@nestjs/common';
import { Ppv04bHobReportTwoService } from './ppv04b_hob_report_two.service';
import { Ppv04bHobReportTwoController } from './ppv04b_hob_report_two.controller';
import { Ppv04bHobReportTwoEntity } from './ppv04b_hob_report_two.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bHobReportTwoEntity])],
  providers: [Ppv04bHobReportTwoService],
  controllers: [Ppv04bHobReportTwoController],
  exports: [Ppv04bHobReportTwoService],
})
export class Ppv04bHobReportTwoModule {}