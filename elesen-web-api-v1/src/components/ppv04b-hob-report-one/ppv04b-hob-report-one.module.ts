import { Module } from '@nestjs/common';
import { Ppv04bHobReportOneService } from './ppv04b-hob-report-one.service';
import { Ppv04bHobReportOneController } from './ppv04b-hob-report-one.controller';
import { Ppv04bHobReportOneEntity } from './ppv04b-hob-report-one.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bHobReportOneEntity])],
  providers: [Ppv04bHobReportOneService],
  controllers: [Ppv04bHobReportOneController],
  exports: [Ppv04bHobReportOneService],
})
export class Ppv04bHobReportOneModule {}