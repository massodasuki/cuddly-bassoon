import { Module } from '@nestjs/common';
import { LpiInlandFishingEquipmentItemsService } from './lpi_inland_fishing_equipment_items.service';
import { LpiInlandFishingEquipmentItemsController } from './lpi_inland_fishing_equipment_items.controller';
import { LpiInlandFishingEquipmentItemsEntity } from './lpi_inland_fishing_equipment_items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiInlandFishingEquipmentItemsEntity])],
  providers: [LpiInlandFishingEquipmentItemsService],
  controllers: [LpiInlandFishingEquipmentItemsController],
  exports: [LpiInlandFishingEquipmentItemsService],
})
export class LpiInlandFishingEquipmentItemsModule {}