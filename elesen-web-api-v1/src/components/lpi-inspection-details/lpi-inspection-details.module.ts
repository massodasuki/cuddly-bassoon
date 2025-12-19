import { Module } from '@nestjs/common';
import { LpiInspectionDetailsService } from './lpi-inspection-details.service';
import { LpiInspectionDetailsController } from './lpi-inspection-details.controller';
import { LpiInspectionDetailsEntity } from './lpi-inspection-details.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiInspectionDetailsEntity])],
  providers: [LpiInspectionDetailsService],
  controllers: [LpiInspectionDetailsController],
  exports: [LpiInspectionDetailsService],
})
export class LpiInspectionDetailsModule {}