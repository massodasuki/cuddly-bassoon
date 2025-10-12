import { Module } from '@nestjs/common';
import { LandingDeclareMonthlyLogService } from './landing-declare-monthly-logs.service';
import { LandingDeclareMonthlyLogEntityController } from './landing-declare-monthly-logs.controller';
import { LandingDeclareMonthlyLogEntity } from './landing-declare-monthly-logs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LandingDeclareMonthlyLogEntity])],
  providers: [LandingDeclareMonthlyLogService],
  controllers: [LandingDeclareMonthlyLogEntityController],
  exports: [LandingDeclareMonthlyLogService],
})
export class LandingDeclareMonthlyLogModule {}
