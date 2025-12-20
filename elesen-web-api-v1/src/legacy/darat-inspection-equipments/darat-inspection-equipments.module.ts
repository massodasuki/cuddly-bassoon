import { Module } from '@nestjs/common';
import { DaratInspectionEquipmentService } from './darat-inspection-equipments.service';
import { DaratInspectionEquipmentEntityController } from './darat-inspection-equipments.controller';
import { DaratInspectionEquipmentEntity } from './darat-inspection-equipments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratInspectionEquipmentEntity])],
  providers: [DaratInspectionEquipmentService],
  controllers: [DaratInspectionEquipmentEntityController],
  exports: [DaratInspectionEquipmentService],
})
export class DaratInspectionEquipmentModule {}

