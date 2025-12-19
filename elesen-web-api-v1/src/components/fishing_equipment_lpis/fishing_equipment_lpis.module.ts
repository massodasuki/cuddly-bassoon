import { Module } from '@nestjs/common';
import { FishingEquipmentLpisService } from './fishing_equipment_lpis.service';
import { FishingEquipmentLpisController } from './fishing_equipment_lpis.controller';
import { FishingEquipmentLpisEntity } from './fishing_equipment_lpis.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FishingEquipmentLpisEntity])],
  providers: [FishingEquipmentLpisService],
  controllers: [FishingEquipmentLpisController],
  exports: [FishingEquipmentLpisService],
})
export class FishingEquipmentLpisModule {}