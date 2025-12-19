import { Module } from '@nestjs/common';
import { Ppv04bApplyDateLpiService } from './ppv04b_apply_date_lpi.service';
import { Ppv04bApplyDateLpiController } from './ppv04b_apply_date_lpi.controller';
import { Ppv04bApplyDateLpiEntity } from './ppv04b_apply_date_lpi.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bApplyDateLpiEntity])],
  providers: [Ppv04bApplyDateLpiService],
  controllers: [Ppv04bApplyDateLpiController],
  exports: [Ppv04bApplyDateLpiService],
})
export class Ppv04bApplyDateLpiModule {}