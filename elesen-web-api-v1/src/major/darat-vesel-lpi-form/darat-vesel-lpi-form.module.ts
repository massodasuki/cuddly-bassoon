import { Module } from '@nestjs/common';
import { DaratVeselLpiFormService } from './darat-vesel-lpi-form.service';
import { DaratVeselLpiFormController } from './darat-vesel-lpi-form.controller';
import { DaratVeselLpiFormEntity } from './darat-vesel-lpi-form.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DaratApplicationEntity } from '../darat-applications/darat-applications.entity';
import { DaratVesselEntity } from '../darat-vessels/darat-vessels.entity';
import { DaratApplicationApprovedEntity } from '../../components/darat-application-approveds/darat-application-approveds.entity';
import { DaratApplicationLogEntity } from '../../components/darat-application-logs/darat-application-logs.entity';
import { DaratApplicationTempEntity } from '../../components/darat-application-temps/darat-application-temps.entity';
import { DaratInspectionEquipmentEntity } from '../../components/darat-inspection-equipments/darat-inspection-equipments.entity';
import { DaratItemFoundEntity } from '../../components/darat-item-founds/darat-item-founds.entity';
import { DaratPaymentReceiptEntity } from '../../components/darat-payment-receipts/darat-payment-receipts.entity';
import { DaratTemporaryPinEntity } from '../../components/darat-temporary-pins/darat-temporary-pins.entity';
import { DaratUserEquipmentEntity } from '../../components/darat-user-equipments/darat-user-equipments.entity';
import { DaratVesselDisposalEntity } from '../../components/darat-vessel-disposals/darat-vessel-disposals.entity';

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
  ])],
  providers: [DaratVeselLpiFormService],
  controllers: [DaratVeselLpiFormController],
  exports: [DaratVeselLpiFormService],
})
export class DaratVeselLpiFormModule {}