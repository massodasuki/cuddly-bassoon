import { Module } from '@nestjs/common';
import { ProfileUserDetailsService } from './profile-user-details.service';
import { ProfileUserDetailsController } from './profile-user-details.controller';
import { ProfileUserEntity } from '../../components/profile-users/profile-users.entity';
import { VesselEntity } from '../../components/vessels/vessels.entity';
import { ProfileUserVesselEntity } from '../../components/profile-user-vessel/profile-user-vessel.entity';
import { ProfilePengusahaSklEntity } from '../../components/profile-pengusaha-skls/profile-pengusaha-skls.entity';
import { ApplicationV2ProfileUser } from '../../components/application-v2-profile-user/application-v2-profile-user.entity';
import { JettieEntity } from '../../components/jetties/jetties.entity';
import { RiverEntity } from '../../components/rivers/rivers.entity';
import { KesalahanEntity } from '../../components/kesalahan/kesalahan.entity';
import { ParliamentEntity } from '../../components/parliaments/parliaments.entity';
import { ParliamentSeatEntity } from '../../components/parliament-seats/parliament-seats.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FishingLogNdEntity } from '../fishing-log-nds/fishing-log-nds.entity';
import { CatchingLocationNdEntity } from '../catching-location-nds/catching-location-nds.entity';
import { KulitEntity } from '../kulit/kulit.entity';
import { EnjinEntity } from '../enjin/enjin.entity';

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
    EnjinEntity
  ])],
  providers: [ProfileUserDetailsService],
  controllers: [ProfileUserDetailsController],
  exports: [ProfileUserDetailsService],
})
export class ProfileUserDetailsModule {}