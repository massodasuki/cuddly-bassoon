import { Module } from '@nestjs/common';
import { LpiInspectionItemsService } from './lpi_inspection_items.service';
import { LpiInspectionItemsController } from './lpi_inspection_items.controller';
import { LpiInspectionItemsEntity } from './lpi_inspection_items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiInspectionItemsEntity])],
  providers: [LpiInspectionItemsService],
  controllers: [LpiInspectionItemsController],
  exports: [LpiInspectionItemsService],
})
export class LpiInspectionItemsModule {}