import { Module } from '@nestjs/common';
import { DaratVeselLpiFormService } from './darat-vesel-lpi-form.service';
import { DaratVeselLpiFormController } from './darat-vesel-lpi-form.controller';
import { DaratVeselLpiFormEntity } from './darat-vesel-lpi-form.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DaratApplicationEntity } from '../darat-applications/darat-applications.entity';
import { DaratVesselEntity } from '../darat-vessels/darat-vessels.entity';
import { DaratApplicationApprovedEntity } from '../darat-application-approveds/darat-application-approveds.entity';
import { DaratApplicationLogEntity } from '../darat-application-logs/darat-application-logs.entity';
import { DaratApplicationTempEntity } from '../darat-application-temps/darat-application-temps.entity';
import { DaratInspectionEquipmentEntity } from '../darat-inspection-equipments/darat-inspection-equipments.entity';
import { DaratItemFoundEntity } from '../darat-item-founds/darat-item-founds.entity';
import { DaratPaymentReceiptEntity } from '../darat-payment-receipts/darat-payment-receipts.entity';
import { DaratTemporaryPinEntity } from '../darat-temporary-pins/darat-temporary-pins.entity';
import { DaratUserEquipmentEntity } from '../darat-user-equipments/darat-user-equipments.entity';
import { DaratVesselDisposalEntity } from '../darat-vessel-disposals/darat-vessel-disposals.entity';
import { DaratVesselEngineEntity } from '../darat-vessel-engines/darat-vessel-engines.entity';
import { DaratVesselHullEntity } from '../darat-vessel-hulls/darat-vessel-hulls.entity';
import { DaratVesselHistorieEntity } from '../darat-vessel-histories/darat-vessel-histories.entity';

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
    DaratVesselEngineEntity,
    DaratVesselHullEntity,
    DaratVesselHistorieEntity,
  ])],
  providers: [DaratVeselLpiFormService],
  controllers: [DaratVeselLpiFormController],
  exports: [DaratVeselLpiFormService],
})
export class DaratVeselLpiFormModule {}