import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LpiFormService } from './lpi-form.service';
import { LpiFormController } from './lpi-form.controller';
import { ImageUploadService } from './image-upload.service';
import { LpiEnginesEntity } from '../entities/lpi-engines.entity';
import { LpiEquipmentItemsEntity } from '../entities/lpi-equipment-items.entity';
import { LpiEquipmentsEntity } from '../entities/lpi-equipments.entity';
import { LpiFishingEquipmentsEntity } from '../entities/lpi-fishing-equipments.entity';
import { LpiFishingGearsEntity } from '../entities/lpi-fishing-gears.entity';
import { LpiInlandFishingEquipmentItemsEntity } from '../entities/lpi-inland-fishing-equipment-items.entity';
import { LpiInlandFishingEquipmentsEntity } from '../entities/lpi-inland-fishing-equipments.entity';
import { LpiInspectionDetailsEntity } from '../entities/lpi-inspection-details.entity';
import { LpiInspectionItemsEntity } from '../entities/lpi-inspection-items.entity';
import { LpiInspectionsEntity } from '../entities/lpi-inspections.entity';
import { LpiNavigationsEntity } from '../entities/lpi-navigations.entity';
import { LpiSafetyEquipmentsEntity } from '../entities/lpi-safety-equipments.entity';
import { LpiSailingEquipmentsEntity } from '../entities/lpi-sailing-equipments.entity';
import { LpiVesselsEntity } from '../entities/lpi-vessels.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      LpiEnginesEntity,
      LpiEquipmentItemsEntity,
      LpiEquipmentsEntity,
      LpiFishingEquipmentsEntity,
      LpiFishingGearsEntity,
      LpiInlandFishingEquipmentItemsEntity,
      LpiInlandFishingEquipmentsEntity,
      LpiInspectionDetailsEntity,
      LpiInspectionItemsEntity,
      LpiInspectionsEntity,
      LpiNavigationsEntity,
      LpiSafetyEquipmentsEntity,
      LpiSailingEquipmentsEntity,
      LpiVesselsEntity,
    ]),
  ],
  controllers: [LpiFormController],
  providers: [LpiFormService, ImageUploadService],
})
export class LpiFormModule {}