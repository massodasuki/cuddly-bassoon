import { Module } from '@nestjs/common';
import { LpiInspectionItemsService } from './lpi-inspection-items.service';
import { LpiInspectionItemsController } from './lpi-inspection-items.controller';
import { LpiInspectionItemsEntity } from './lpi-inspection-items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiInspectionItemsEntity])],
  providers: [LpiInspectionItemsService],
  controllers: [LpiInspectionItemsController],
  exports: [LpiInspectionItemsService],
})
export class LpiInspectionItemsModule {}