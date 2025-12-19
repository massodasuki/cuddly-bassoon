import { Module } from '@nestjs/common';
import { Ppv04bInspectionLpiService } from './ppv04b_inspection_lpi.service';
import { Ppv04bInspectionLpiController } from './ppv04b_inspection_lpi.controller';
import { Ppv04bInspectionLpiEntity } from './ppv04b_inspection_lpi.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bInspectionLpiEntity])],
  providers: [Ppv04bInspectionLpiService],
  controllers: [Ppv04bInspectionLpiController],
  exports: [Ppv04bInspectionLpiService],
})
export class Ppv04bInspectionLpiModule {}