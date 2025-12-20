import { Module } from '@nestjs/common';
import { DaratUserEquipmentHistorieService } from './darat-user-equipment-histories.service';
import { DaratUserEquipmentHistorieEntityController } from './darat-user-equipment-histories.controller';
import { DaratUserEquipmentHistorieEntity } from './darat-user-equipment-histories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratUserEquipmentHistorieEntity])],
  providers: [DaratUserEquipmentHistorieService],
  controllers: [DaratUserEquipmentHistorieEntityController],
  exports: [DaratUserEquipmentHistorieService],
})
export class DaratUserEquipmentHistorieModule {}

