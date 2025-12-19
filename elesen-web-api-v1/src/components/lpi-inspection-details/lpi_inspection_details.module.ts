import { Module } from '@nestjs/common';
import { LpiInspectionDetailsService } from './lpi_inspection_details.service';
import { LpiInspectionDetailsController } from './lpi_inspection_details.controller';
import { LpiInspectionDetailsEntity } from './lpi_inspection_details.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiInspectionDetailsEntity])],
  providers: [LpiInspectionDetailsService],
  controllers: [LpiInspectionDetailsController],
  exports: [LpiInspectionDetailsService],
})
export class LpiInspectionDetailsModule {}