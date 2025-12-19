import { Module } from '@nestjs/common';
import { Ppv04bApplyDateTwoService } from './ppv04b-apply-date-two.service';
import { Ppv04bApplyDateTwoController } from './ppv04b-apply-date-two.controller';
import { Ppv04bApplyDateTwoEntity } from './ppv04b-apply-date-two.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bApplyDateTwoEntity])],
  providers: [Ppv04bApplyDateTwoService],
  controllers: [Ppv04bApplyDateTwoController],
  exports: [Ppv04bApplyDateTwoService],
})
export class Ppv04bApplyDateTwoModule {}