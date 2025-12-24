import { Module } from '@nestjs/common';
import { ProfileUserDetailsService } from './profile-user-details.service';
import { ProfileUserDetailsController } from './profile-user-details.controller';
import { ProfileUserEntity } from '../entities/profile-users.entity';
import { VesselEntity } from '../../marin/vessels/vessel.entity';
import { ProfileUserVesselEntity } from '../entities/profile-user-vessel.entity';
import { ProfilePengusahaSklEntity } from '../entities/profile-pengusaha-skls.entity';
import { ApplicationV2ProfileUser } from '../../../components/application-v2-profile-user/application-v2-profile-user.entity';
import { JettieEntity } from '../../marin/entities/jetties.entity';
import { RiverEntity } from '../../marin/entities/rivers.entity';
import { KesalahanEntity } from '../../marin/entities/kesalahan.entity';
import { ParliamentEntity } from '../../marin/entities/parliaments.entity';
import { ParliamentSeatEntity } from '../../marin/entities/parliament-seats.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FishingLogNdEntity } from '../../marin/entities/fishing-log-nds.entity';
import { CatchingLocationNdEntity } from '../../marin/entities/catching-location-nds.entity';
import { KulitEntity } from '../../marin/entities/kulit.entity';
import { EnjinEntity } from '../../marin/entities/enjin.entity';
import { DaratHelpAgencyFishermansEntity } from '../../darat/entities/darat-help-agency-fishermans.entity';
import { DaratUserFishermanInfosEntity } from '../../darat/entities/darat-user-fisherman-infos.entity';
import { DaratVesselEntity } from '../../../components/darat-vessels/darat-vessels.entity';
import { DaratVesselInspectionEntity } from '../../../components/darat-vessel-inspections/darat-vessel-inspections.entity';
import { DaratVesselEngineEntity } from '../../../components/darat-vessel-engines/darat-vessel-engines.entity';
import { DaratVesselHullEntity } from '../../../components/darat-vessel-hulls/darat-vessel-hulls.entity';
import { DaratApplicationEntity } from '../../../components/darat-applications/darat-applications.entity';
import { CodeMaster } from '../../../legacy/code-masters/code-masters.entity';
import { DaratBaseJettieEntity } from '../../../components/darat-base-jetties/darat-base-jetties.entity';
import { DaratUserEquipmentEntity } from '../../../components/darat-user-equipments/darat-user-equipments.entity';
import { UserBankAccountEntity } from '../entities/user-bank-accounts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    ProfileUserEntity,
    VesselEntity,
    ProfileUserVesselEntity,
    ProfilePengusahaSklEntity,
    ApplicationV2ProfileUser,
    JettieEntity,
    RiverEntity,
    KesalahanEntity,
    ParliamentEntity,
    ParliamentSeatEntity,
    FishingLogNdEntity,
    CatchingLocationNdEntity,
    KulitEntity,
    EnjinEntity,
    DaratHelpAgencyFishermansEntity,
    DaratUserFishermanInfosEntity,
    DaratVesselEntity,
    DaratVesselInspectionEntity,
    DaratVesselEngineEntity,
    DaratVesselHullEntity,
    DaratApplicationEntity,
    CodeMaster,
    DaratBaseJettieEntity,
    DaratUserEquipmentEntity,
    UserBankAccountEntity
  ])],
  providers: [ProfileUserDetailsService],
  controllers: [ProfileUserDetailsController],
  exports: [ProfileUserDetailsService],
})
export class ProfileUserDetailsModule {}
