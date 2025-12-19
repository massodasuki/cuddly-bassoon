import { Module } from '@nestjs/common';
import { LpiEquipmentItemsService } from './lpi_equipment_items.service';
import { LpiEquipmentItemsController } from './lpi_equipment_items.controller';
import { LpiEquipmentItemsEntity } from './lpi_equipment_items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiEquipmentItemsEntity])],
  providers: [LpiEquipmentItemsService],
  controllers: [LpiEquipmentItemsController],
  exports: [LpiEquipmentItemsService],
})
export class LpiEquipmentItemsModule {}