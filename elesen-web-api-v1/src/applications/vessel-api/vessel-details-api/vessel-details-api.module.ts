import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VesselDetailsApiController } from './vessel-details-api.controller';
import { VesselDetailsApiService } from './vessel-details-api.service';
import { VesselDetailsService as DaratVesselDetailsService } from '../vessel-details/darat-vessel-details.service';
import { VesselDetailsService as MarinVesselDetailsService } from '../vessel-details/vessel-details.service';

// Entities from darat service
import { DaratVesselEntity } from '../../darat/entities/darat-vessels.entity';
import { DaratVesselInspectionEntity } from '../../darat/entities/darat-vessel-inspections.entity';
import { DaratVesselEngineEntity } from '../../darat/entities/darat-vessel-engines.entity';
import { DaratVesselHullEntity } from '../../darat/entities/darat-vessel-hulls.entity';
import { DaratApplicationEntity } from '../../darat/entities/darat-applications.entity';
import { CodeMaster } from '../../common/code-masters/code-masters.entity';
import { KulitEntity } from '../../marin/entities/kulit.entity';
import { KesalahanEntity } from '../../marin/entities/kesalahan.entity';
import { ProfilePentadbirHartaEntity } from '../../users/entities/profile-pentadbir-hartas.entity';
import { KruEntity } from '../../marin/entities/kru.entity';
import { PemilikanEntity } from '../../marin/entities/pemilikan.entity';
import { PematuhanEntity } from '../../marin/entities/pematuhan.entity';
import { PendaftaranAntarabangsaEntity } from '../../marin/entities/pendaftaran-antarabangsa.entity';
import { CmEquipment } from '../../marin/entities/cm-equipment.entity';
import { JettieEntity } from '../../marin/entities/jetties.entity';
import { UserEntity } from '../../users/entities/user.entity';
import { VesselEntity } from '../../../legacy/vessels/vessel.entity';

// Entities from marin service
import { EnjinEntity } from '../../marin/entities/enjin.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DaratVesselEntity,
      DaratVesselInspectionEntity,
      DaratVesselEngineEntity,
      DaratVesselHullEntity,
      DaratApplicationEntity,
      CodeMaster,
      KulitEntity,
      KesalahanEntity,
      ProfilePentadbirHartaEntity,
      KruEntity,
      PemilikanEntity,
      PematuhanEntity,
      PendaftaranAntarabangsaEntity,
      CmEquipment,
      JettieEntity,
      UserEntity,
      VesselEntity,
      EnjinEntity,
    ]),
  ],
  controllers: [VesselDetailsApiController],
  providers: [VesselDetailsApiService, DaratVesselDetailsService, MarinVesselDetailsService],
})
export class VesselDetailsApiModule {}