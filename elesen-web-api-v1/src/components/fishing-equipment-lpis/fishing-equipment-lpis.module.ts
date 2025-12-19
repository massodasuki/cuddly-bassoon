import { Module } from '@nestjs/common';
import { FishingEquipmentLpisService } from './fishing-equipment-lpis.service';
import { FishingEquipmentLpisController } from './fishing-equipment-lpis.controller';
import { FishingEquipmentLpisEntity } from './fishing-equipment-lpis.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FishingEquipmentLpisEntity])],
  providers: [FishingEquipmentLpisService],
  controllers: [FishingEquipmentLpisController],
  exports: [FishingEquipmentLpisService],
})
export class FishingEquipmentLpisModule {}