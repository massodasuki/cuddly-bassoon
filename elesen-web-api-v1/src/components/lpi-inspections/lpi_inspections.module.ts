import { Module } from '@nestjs/common';
import { LpiInspectionsService } from './lpi_inspections.service';
import { LpiInspectionsController } from './lpi_inspections.controller';
import { LpiInspectionsEntity } from './lpi_inspections.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiInspectionsEntity])],
  providers: [LpiInspectionsService],
  controllers: [LpiInspectionsController],
  exports: [LpiInspectionsService],
})
export class LpiInspectionsModule {}