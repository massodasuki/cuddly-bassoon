import { Module } from '@nestjs/common';
import { DaratEquipmentListService } from './darat-equipment-lists.service';
import { DaratEquipmentListEntityController } from './darat-equipment-lists.controller';
import { DaratEquipmentListEntity } from './darat-equipment-lists.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratEquipmentListEntity])],
  providers: [DaratEquipmentListService],
  controllers: [DaratEquipmentListEntityController],
  exports: [DaratEquipmentListService],
})
export class DaratEquipmentListModule {}

