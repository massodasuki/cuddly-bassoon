import { Module } from '@nestjs/common';
import { DaratUserEquipmentService } from './darat-user-equipments.service';
import { DaratUserEquipmentEntityController } from './darat-user-equipments.controller';
import { DaratUserEquipmentEntity } from './darat-user-equipments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratUserEquipmentEntity])],
  providers: [DaratUserEquipmentService],
  controllers: [DaratUserEquipmentEntityController],
  exports: [DaratUserEquipmentService],
})
export class DaratUserEquipmentModule {}

