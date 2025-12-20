import { Module } from '@nestjs/common';
import { DaratVeselLpiFormService } from './darat-vesel-lpi-form.service';
import { DaratVeselLpiFormController } from './darat-vesel-lpi-form.controller';
import { DaratVeselLpiFormEntity } from './darat-vesel-lpi-form.entity';
import { ImageUploadService } from './image-upload.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DaratApplicationEntity } from '../entities/darat-applications.entity';
import { DaratVesselEntity } from '../darat-vessels/darat-vessels.entity';
import { DaratApplicationApprovedEntity } from '../entities/darat-application-approveds.entity';
import { DaratApplicationLogEntity } from '../entities/darat-application-logs.entity';
import { DaratApplicationTempEntity } from '../entities/darat-application-temps.entity';
import { DaratInspectionEquipmentEntity } from '../entities/darat-inspection-equipments.entity';
import { DaratItemFoundEntity } from '../entities/darat-item-founds.entity';
import { DaratPaymentReceiptEntity } from '../entities/darat-payment-receipts.entity';
import { DaratTemporaryPinEntity } from '../entities/darat-temporary-pins.entity';
import { DaratUserEquipmentEntity } from '../entities/darat-user-equipments.entity';
import { DaratVesselDisposalEntity } from '../entities/darat-vessel-disposals.entity';
import { DaratVesselEngineHistorieEntity } from '../entities/darat-vessel-engine-histories.entity';
import { DaratVesselEngineEntity } from '../../../components/darat-vessel-engines/darat-vessel-engines.entity';
import { DaratVesselHullEntity } from '../../../components/darat-vessel-hulls/darat-vessel-hulls.entity';
import { DaratVesselHistorieEntity } from '../entities/darat-vessel-histories.entity';
import { DaratVesselHullHistorieEntity } from '../entities/darat-vessel-hull-histories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    DaratVeselLpiFormEntity,
    DaratApplicationEntity,
    DaratVesselEntity,
    DaratApplicationApprovedEntity,
    DaratApplicationLogEntity,
    DaratApplicationTempEntity,
    DaratInspectionEquipmentEntity,
    DaratItemFoundEntity,
    DaratPaymentReceiptEntity,
    DaratTemporaryPinEntity,
    DaratUserEquipmentEntity,
    DaratVesselDisposalEntity,
    DaratVesselEngineHistorieEntity,
    DaratVesselEngineEntity,
    DaratVesselHullEntity,
    DaratVesselHistorieEntity,
    DaratVesselHullHistorieEntity,
  ])],
  providers: [DaratVeselLpiFormService, ImageUploadService],
  controllers: [DaratVeselLpiFormController],
  exports: [DaratVeselLpiFormService],
})
export class DaratVeselLpiFormModule {}
