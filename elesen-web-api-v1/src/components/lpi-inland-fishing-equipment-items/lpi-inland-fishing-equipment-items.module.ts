import { Module } from '@nestjs/common';
import { LpiInlandFishingEquipmentItemsService } from './lpi-inland-fishing-equipment-items.service';
import { LpiInlandFishingEquipmentItemsController } from './lpi-inland-fishing-equipment-items.controller';
import { LpiInlandFishingEquipmentItemsEntity } from './lpi-inland-fishing-equipment-items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiInlandFishingEquipmentItemsEntity])],
  providers: [LpiInlandFishingEquipmentItemsService],
  controllers: [LpiInlandFishingEquipmentItemsController],
  exports: [LpiInlandFishingEquipmentItemsService],
})
export class LpiInlandFishingEquipmentItemsModule {}