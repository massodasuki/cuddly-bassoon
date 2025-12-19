import { Module } from '@nestjs/common';
import { LpiEquipmentItemsService } from './lpi-equipment-items.service';
import { LpiEquipmentItemsController } from './lpi-equipment-items.controller';
import { LpiEquipmentItemsEntity } from './lpi-equipment-items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiEquipmentItemsEntity])],
  providers: [LpiEquipmentItemsService],
  controllers: [LpiEquipmentItemsController],
  exports: [LpiEquipmentItemsService],
})
export class LpiEquipmentItemsModule {}